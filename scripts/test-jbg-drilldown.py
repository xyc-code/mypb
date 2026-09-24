"""Browser regression with real PB libraries and a simulated list endpoint.

Requires Python Playwright and a Chromium executable (optional first argument).
Does not access the PB database or modify the intranet view.
"""
import json
from pathlib import Path
import sys
from urllib.parse import parse_qs, urlencode, urlsplit

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / 'WebRoot'
BASE = 'http://jbg.test/pb/'
TARGET = 'platform/eform/bpmsCRUDClient/toViewJsp/jsbg_lcc'
MODULE = 'static/pb-modern/jushoubaogao/'
TYPES = ['总体', '质量', '安全', '生产', '技术', '其他']
METRICS = [('报告数', 'all'), ('已完成', 'ended'), ('闭环率', 'ended'), ('处理中', 'active'), ('未受理', 'start')]
SAFETY = '安全（技安环保/保密/保卫/合规等）'
GRID_URL = 'platform/eform/bpmsEformDataOptionsController/dataOperating/selectTableComponentData/view/tableMain/Y/V1'


def tag(src):
    return '<script src="' + BASE + src + '"></script>'


LIBS = tag('static/js/platform/portal/jquery-1.8.3.min.js')
GRID = tag('static/h5/jqGrid-5.2.0/js/i18n/grid.locale-cn.js') + tag('static/h5/jqGrid-5.2.0/js/jquery.jqGrid.js')
EXT = tag(MODULE + 'jushoubaogao-drilldown.js')


def view_html(missing=False):
    fields = '<input name="JBG_CREATION_DATE_START"><input name="JBG_CREATION_DATE_END">'
    if not missing:
        fields += ''.join('<input type="checkbox" name="JBG_REPORT_TYPES" value="' + t + '">' for t in TYPES[1:] + [SAFETY])
    return '<!doctype html><meta charset="utf-8">' + LIBS + GRID + '''
    <div id="tableToolbartableMain"><select id="tableMainworkFlowSelect">
    <option value="all">全部</option><option value="start">拟稿中</option>
    <option value="active">流转中</option><option value="ended">已完成</option></select>
    <input id="keyWordtableMain"></div>
    <form id="searchformtableMain"><select name="BGLX">''' + ''.join(
        '<option value="' + t + '">' + t + '</option>' for t in [''] + TYPES[1:] + [SAFETY]
    ) + '</select>' + fields + '''<input name="SZDW"></form><table id="tableMain"></table>
    <div id="pager"></div><script>
    $(function () {
      $('#tableMain').jqGrid({url: ''' + json.dumps(BASE + GRID_URL) + ''', mtype:'POST', datatype:'json',
        postData:{param:JSON.stringify({bpmState:'all'}),comparameter:'{}'},
        colModel:[{name:'ID'},{name:'BGLX'}],pager:'#pager',rowNum:10,viewrecords:true});
    });
    </script>''' + EXT


def chart_html():
    tabs = '<div class="jbg-type-tabs">' + ''.join('<button class="jbg-type-tab" data-report-type="' + t + '">' + t + '</button>' for t in TYPES) + '</div>'
    return '<!doctype html><meta charset="utf-8"><style>#jbgStatusChart,#jbgMonthlyChart{position:relative}</style>' + LIBS + tag('static/h5/echarts/dist/echarts-4.1.2.js') + '''
    <main id="pb-jushoubaogao" data-statistics-url="''' + BASE + '''statistics" data-detail-url="''' + BASE + TARGET + '''">
    <select class="jbg-year"></select><div class="jbg-loading" style="display:none"></div>
    <div class="jbg-error"></div>''' + tabs + '''<div id="jbgStatusChart" style="width:850px;height:300px"></div>''' + tabs + '''
    <div id="jbgMonthlyChart" style="width:850px;height:200px"></div></main>
    <script>window.opened=[];window.addTab=function(title,url){opened.push({title:title,url:url});};</script>
    ''' + EXT + tag(MODULE + 'jushoubaogao.js')


def run():
    posts = []
    rows = []
    for year in [2025, 2026, 2027]:
        for date in [f'{year}-01-01 00:00:00', f'{year}-12-31 23:59:59']:
            for kind in TYPES[1:] + [SAFETY, '安全异常值', '']:
                for state in ['ended', 'active', 'start', 'nostart', '']:
                    rows.append(dict(ID=str(len(rows)), BGLX=kind, state=state, date=date))

    def route(request_route):
        request = request_route.request
        url = urlsplit(request.url)
        path = url.path.removeprefix('/pb/')
        if path == TARGET:
            request_route.fulfill(content_type='text/html', body=view_html('missing=1' in url.query))
        elif path == 'chart':
            request_route.fulfill(content_type='text/html', body=chart_html())
        elif path == 'statistics':
            year = int(parse_qs(url.query).get('year', ['2026'])[0])
            statuses = [] if year == 2025 else [{'name': '已完成', 'value': 3}, {'name': '流转中', 'value': 2}, {'name': '拟稿中', 'value': 1}]
            request_route.fulfill(json=dict(ok=True, year=year, years=[2026, 2025], total=6 if statuses else 0,
                status=statuses, monthly=[], typeBreakdowns={t: dict(status=statuses, monthly=[]) for t in TYPES[1:]}))
        elif path == GRID_URL:
            post = {key: values[0] for key, values in parse_qs(request.post_data or '', keep_blank_values=True).items()}
            posts.append(post)
            param = json.loads(post.get('param') or '{}')
            selected = [row for row in rows if
                (not param.get('JBG_CREATION_DATE_START') or row['date'] >= param['JBG_CREATION_DATE_START']) and
                (not param.get('JBG_CREATION_DATE_END') or row['date'] <= param['JBG_CREATION_DATE_END']) and
                (not param.get('JBG_REPORT_TYPES') or row['BGLX'] in param['JBG_REPORT_TYPES'].split(',')) and
                (param.get('bpmState', 'all') == 'all' or row['state'] == param['bpmState'])]
            request_route.fulfill(json=dict(page=1, total=max(1, (len(selected) + 9) // 10), records=len(selected),
                rows=[dict(id=r['ID'], cell=[r['ID'], r['BGLX']]) for r in selected[:10]]))
        else:
            file = WEB / path
            if file.is_file():
                request_route.fulfill(path=str(file), content_type='application/javascript' if file.suffix == '.js' else 'text/plain')
            else:
                request_route.fulfill(status=404, body='not found')

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, executable_path=sys.argv[1]) if len(sys.argv) > 1 else p.chromium.launch(headless=True, channel='msedge')
        page = browser.new_page(viewport=dict(width=1100, height=800))
        errors = []
        page.on('pageerror', lambda error: errors.append(str(error)))
        page.route('**/*', route)
        for kind in TYPES:
            for metric, state in METRICS:
                posts.clear()
                query = urlencode(dict(jbgDrilldown=1, jbgYear=2026, jbgType=kind, jbgState=state))
                page.goto(BASE + TARGET + '?' + query, wait_until='networkidle')
                assert len(posts) == 1, (kind, metric, posts, errors)
                param = json.loads(posts[0]['param'])
                assert param['bpmState'] == state
                assert param['JBG_REPORT_TYPES'] == ('' if kind == '总体' else '安全,' + SAFETY if kind == '安全' else kind)
                assert param['JBG_CREATION_DATE_START'] == '2026-01-01 00:00:00'
                assert param['JBG_CREATION_DATE_END'] == '2026-12-31 23:59:59'
                count = (8 if kind == '总体' else 2 if kind == '安全' else 1) * 2 * (5 if state == 'all' else 1)
                assert page.evaluate("$('#tableMain').jqGrid('getGridParam','records')") == count
        # Pagination, sorting, reset and additional advanced conditions must retain scope.
        assert not errors, errors
        with page.expect_response('**/selectTableComponentData/**'):
            page.evaluate("$('#tableMain').jqGrid('setGridParam',{page:2,sortname:'ID',sortorder:'desc',postData:{param:JSON.stringify({SZDW:'测试单位',bpmState:'all'}),keyWord:''}}).trigger('reloadGrid')")
        page.wait_for_load_state('networkidle')
        assert json.loads(posts[-1]['param'])['SZDW'] == '测试单位'
        assert json.loads(posts[-1]['param'])['bpmState'] == 'start'
        with page.expect_response('**/selectTableComponentData/**'):
            page.evaluate("$('#searchformtableMain')[0].reset();$('#tableMain').jqGrid('setGridParam',{postData:{param:'{}'}}).trigger('reloadGrid')")
        page.wait_for_load_state('networkidle')
        assert json.loads(posts[-1]['param'])['JBG_REPORT_TYPES'] == '其他'
        assert page.locator('#tableMainworkFlowSelect').input_value() == 'start'
        page.goto(BASE + TARGET + '?' + urlencode(dict(jbgDrilldown=1, jbgYear=2024, jbgType='总体', jbgState='all')), wait_until='networkidle')
        assert page.evaluate("$('#tableMain').jqGrid('getGridParam','records')") == 0
        # Ordinary menu request remains unchanged.
        posts.clear()
        page.goto(BASE + TARGET, wait_until='networkidle')
        assert json.loads(posts[0]['param']) == dict(bpmState='all')
        assert page.locator('#tableMainworkFlowSelect').is_enabled()
        for query in ['jbgDrilldown=1&jbgYear=bad&jbgType=总体&jbgState=all',
                      'jbgDrilldown=1&jbgYear=2026&jbgType=安全&jbgState=all&missing=1']:
            posts.clear()
            page.goto(BASE + TARGET + '?' + query, wait_until='networkidle')
            assert not posts
            assert page.locator('#jbg-drilldown-error').is_visible()
        # Use actual ECharts canvas hits, not a replacement chart implementation.
        page.goto(BASE + 'chart', wait_until='networkidle')
        for kind in TYPES:
            page.locator('.jbg-type-tabs').nth(0).locator('[data-report-type="' + kind + '"]').click()
            for index, (metric, state) in enumerate(METRICS):
                point = page.evaluate("i=>{var c=echarts.getInstanceByDom(document.getElementById('jbgStatusChart'));return c.convertToPixel({yAxisIndex:0},i);}", index)
                box = page.locator('#jbgStatusChart').bounding_box()
                page.mouse.click(box['x'] + 35, box['y'] + point)
                page.wait_for_function('opened.length === ' + str(TYPES.index(kind) * 5 + index + 1))
                opened = page.evaluate('opened[opened.length-1]')
                args = parse_qs(urlsplit(opened['url']).query)
                assert args['jbgType'] == [kind] and args['jbgState'] == [state]
        page.locator('.jbg-type-tabs').nth(1).locator('[data-report-type="安全"]').click()
        point = page.evaluate("echarts.getInstanceByDom(document.getElementById('jbgStatusChart')).convertToPixel({yAxisIndex:0},0)")
        box = page.locator('#jbgStatusChart').bounding_box()
        page.mouse.click(box['x'] + 35, box['y'] + point)
        page.wait_for_function('opened.length === 31')
        assert parse_qs(urlsplit(page.evaluate('opened[30].url')).query)['jbgType'] == ['其他']
        point = page.evaluate("(()=>{var c=echarts.getInstanceByDom(document.getElementById('jbgStatusChart'));return [c.convertToPixel({xAxisIndex:0},1.5),c.convertToPixel({yAxisIndex:0},1)];})()")
        page.mouse.click(box['x'] + point[0], box['y'] + point[1])
        page.wait_for_function('opened.length === 32')
        assert parse_qs(urlsplit(page.evaluate('opened[31].url')).query)['jbgState'] == ['ended']
        page.locator('.jbg-year').select_option('2025')
        page.wait_for_load_state('networkidle')
        point = page.evaluate("echarts.getInstanceByDom(document.getElementById('jbgStatusChart')).convertToPixel({yAxisIndex:0},0)")
        box = page.locator('#jbgStatusChart').bounding_box()
        page.mouse.click(box['x'] + 35, box['y'] + point)
        page.wait_for_function('opened.length === 33')
        args = parse_qs(urlsplit(page.evaluate('opened[32].url')).query)
        assert args['jbgYear'] == ['2025'] and args['jbgType'] == ['总体']
        assert not errors, errors
        browser.close()
    print('PASS: 30 list combinations, 30 real chart clicks, date boundaries, safety aliases, pagination/sort/reset, default menu, invalid/missing configuration, empty year; no browser errors.')


if __name__ == '__main__':
    run()
