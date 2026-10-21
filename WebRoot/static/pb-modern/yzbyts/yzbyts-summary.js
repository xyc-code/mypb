(function ($) {
    'use strict';
    var root = $('.pb-yzbyts-summary-page'), base = 'platform/avicit/pb/yzbyts/summary/';
    var config, busy = false, loaded = false, savedSnapshot = '', summaryId = '', currentStatus = '', photos = [];
    var clockOffset = 0, page = 1, decoder = document.createElement('textarea');
    var fields = [
        ['Theme', 'activityTheme', 'ACTIVITY_THEME', 'themeMax', '活动主题'],
        ['Goal', 'activityGoal', 'ACTIVITY_GOAL', 'goalMax', '活动目标'],
        ['Background', 'activityBackground', 'ACTIVITY_BACKGROUND', 'backgroundMax', '活动背景'],
        ['Thought', 'workThought', 'WORK_THOUGHT', 'thoughtMax', '工作思路'],
        ['Practice', 'practice', 'PRACTICE', 'practiceMax', '具体做法'],
        ['Achievement', 'achievement', 'ACHIEVEMENT', 'achievementMax', '突出成效']
    ];
    function query() {
        var result = {};
        $.each(window.location.search.substring(1).split('&'), function (_, pair) {
            var parts = pair.split('=');
            if (parts[0]) { try { result[decodeURIComponent(parts[0])] = decodeURIComponent((parts[1] || '').replace(/\+/g, ' ')); } catch (ignore) {} }
        });
        return result;
    }
    var params = query();
    function decode(value) {
        if (typeof value === 'string') return value.replace(/&(?:#[0-9]+|#x[0-9a-f]+|[a-z][a-z0-9]+);/gi, function (entity) { decoder.innerHTML = entity; return decoder.value; });
        if (value && typeof value === 'object') $.each(value, function (key, item) { value[key] = decode(item); });
        return value;
    }
    function errorText(error) {
        return error && (error.message || (error.responseJSON && error.responseJSON.message)) || '请求失败，请检查连接后重试。登录失效时请重新登录。';
    }
    function notice(value, type) {
        $('#summaryMessage').removeClass('error success').addClass(type || '').text(value || '');
        if (type === 'error') $('#saveStatus').text(value);
    }
    function api(action, data, upload) {
        var options = { url:base + action, type:action === 'config' ? 'GET' : 'POST', dataType:'json', cache:false, data:data };
        if (upload) { options.processData = false; options.contentType = false; }
        return $.ajax(options).then(function (result) {
            result = decode(result);
            if (!result || result.flag !== 'success') return $.Deferred().reject({message:result && result.message || '操作未成功，请重试。'}).promise();
            return result.data;
        });
    }
    function badge(status) { return status === 'SUBMITTED' ? '已提交' : status === 'DRAFT' ? '草稿' : '未开始'; }
    function badgeClass(status) { return 'summary-badge ' + (status === 'SUBMITTED' ? 'status-submitted' : status === 'DRAFT' ? 'status-draft' : ''); }
    function closed() { return config && Date.now() + clockOffset > Number(config.deadlineTime); }
    function filters() { return {partyName:$('#summaryPartyName').val() || '', status:$('#summaryStatus').val() || '', page:page}; }
    function listLink() { return base + 'toManage?' + $.param({partyName:params.partyName || '', status:params.status || '', page:params.page || 1}); }
    function loadList(targetPage) {
        if (busy) return;
        busy = true;
        page = targetPage || 1;
        $('#summarySearch').prop('disabled', true);
        notice('正在查询…');
        var data = filters(); data.year = config.year; data.rows = 20;
        api('list', data).done(function (result) {
            page = result.page;
            var tbody = $('#summaryTable tbody').empty();
            $.each(result.data || [], function (index, item) {
                var tr = $('<tr>');
                $('<td>').text((page - 1) * 20 + index + 1).appendTo(tr);
                $('<td>').text(item.PARTY_NAME || '—').appendTo(tr);
                $('<td>').text(item.ACTIVITY_THEME || '—').appendTo(tr);
                $('<td>').append($('<span>').addClass(badgeClass(item.STATUS)).text(badge(item.STATUS))).appendTo(tr);
                $('<td>').text(item.SUBMITTED_AT ? String(item.SUBMITTED_AT).substring(0, 19).replace('T',' ') : '—').appendTo(tr);
                var route = filters(); route.partyId = item.PARTY_ID; route.year = config.year;
                $('<td>').append($('<a>').addClass('summary-row-link').attr('href', base + 'toEdit?' + $.param(route)).text(closed() ? '查看总结' : '填写 / 查看')).appendTo(tr);
                tr.appendTo(tbody);
            });
            if (!result.records) tbody.append('<tr><td colspan="6" class="summary-empty">没有符合条件的记录，请调整查询条件。</td></tr>');
            var pager = $('#summaryPager').empty();
            $('<span>').text('共 ' + result.records + ' 条 · 第 ' + page + ' / ' + Math.max(1, result.total) + ' 页').appendTo(pager);
            $('<button type="button">上一页</button>').prop('disabled',page <= 1).data('page',page-1).appendTo(pager);
            $('<button type="button">下一页</button>').prop('disabled',page >= result.total).data('page',page+1).appendTo(pager);
            notice(params.saved ? (params.saved === 'submitted' ? '总结已提交，已自动返回列表。' : '总结已保存，已自动返回列表。') : closed() ? '填报已截止，可查看和导出总结。' : '共 ' + result.records + ' 个党组织', params.saved ? 'success' : '');
            params.saved = '';
            window.history.replaceState(null, '', base + 'toManage?' + $.param(filters()));
        }).fail(function (error) { notice(errorText(error),'error'); }).always(function () { busy = false; $('#summarySearch').prop('disabled',false); });
    }
    function exportExcel() {
        if (!config || $('#summaryExport').prop('disabled')) return;
        var data = filters(); data.year = config.year; delete data.page;
        var button = $('#summaryExport').prop('disabled',true).text('正在生成含照片的 Excel…');
        var xhr = new XMLHttpRequest();
        xhr.open('GET',base + 'export?' + $.param(data),true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (xhr.status === 200 && /spreadsheetml/.test(xhr.getResponseHeader('Content-Type') || '')) {
                var url = URL.createObjectURL(xhr.response), link = document.createElement('a');
                link.href = url; link.download = data.year + '年一支部一特色年度总结.xlsx'; document.body.appendChild(link); link.click(); link.remove();
                setTimeout(function () { URL.revokeObjectURL(url); },30000);
                notice('Excel 已生成，包含当前筛选下的全部总结和照片。','success');
            } else notice('导出失败，请检查登录状态后重试；已填内容不受影响。','error');
        };
        xhr.onerror = function () { notice('导出失败，请检查连接后重试。','error'); };
        xhr.onloadend = function () { button.prop('disabled',false).text('导出 Excel（含照片）'); };
        xhr.send();
    }
    function formData() {
        var data = {year:config.year, partyId:params.partyId};
        $.each(fields,function (_, field) { data[field[1]] = $('#editor' + field[0]).val(); });
        return data;
    }
    function snapshot() { return JSON.stringify(formData()); }
    function dirty() { return loaded && snapshot() !== savedSnapshot; }
    function counts() {
        if (!config) return;
        $.each(fields,function (_, field) {
            var length = $.trim($('#editor' + field[0]).val() || '').length;
            $('#count' + field[0]).text(length + ' / ' + config[field[3]] + ' 字').toggleClass('over',length > config[field[3]]);
        });
    }
    function validate(checkRequired) {
        if (closed()) { notice('填报已截止，可查看和导出总结。','error'); return false; }
        var valid = true;
        $.each(fields,function (_, field) {
            var value = $.trim($('#editor' + field[0]).val() || '');
            if (valid && checkRequired && !value) {
                notice(field[4] + '不能为空，请填写后保存。','error');
                $('#editor' + field[0]).focus(); valid = false;
            } else if (valid && value.length > config[field[3]]) {
                notice(field[4] + '不能超过' + config[field[3]] + '字，请调整后保存。','error');
                $('#editor' + field[0]).focus(); valid = false;
            }
        });
        return valid;
    }
    function controls() {
        var disabled = !loaded || busy || closed();
        $('#summaryFields,#editorSave,#editorSubmit').prop('disabled',disabled);
        $('#editorPhoto').prop('disabled',disabled || photos.length >= config.photoMax);
        root.toggleClass('summary-readonly',!!closed());
        $('.summary-photo-controls button').prop('disabled',disabled);
        $('.summary-upload').toggle(!closed() && photos.length < config.photoMax);
        $('#editorPhoto').toggle(!closed() && photos.length < config.photoMax);
        if (closed()) { $('#saveStatus').text('填报已截止'); $('#saveHint').text('可查看、下载照片及返回列表导出'); }
    }
    function setStatus(item) {
        summaryId = item.SUMMARY_ID || ''; currentStatus = item.STATUS;
        $('#editorStatus').attr('class',badgeClass(currentStatus)).text(badge(currentStatus));
        $('#editorSave').text(currentStatus === 'SUBMITTED' ? '保存修改' : '保存草稿');
        $('#editorSubmit').text(currentStatus === 'SUBMITTED' ? '更新并提交' : '提交总结');
    }
    function renderPhotos(files) {
        photos = files || [];
        var container = $('#editorFiles').empty();
        $('#photoCount').text(photos.length + ' / ' + config.photoMax + ' 张');
        $.each(photos,function (_, file) {
            var url = base + 'download?fileId=' + encodeURIComponent(file.ID);
            var card = $('<div>').addClass('summary-photo');
            $('<a target="_blank" rel="noopener">').attr({href:url + '&inline=true',title:'查看照片：' + file.FILE_NAME}).append($('<img>').attr({src:url + '&inline=true',alt:file.FILE_NAME})).appendTo(card);
            $('<span>').addClass('summary-photo-name').text(file.FILE_NAME).attr('title',file.FILE_NAME).appendTo(card);
            var actions = $('<div>').addClass('summary-photo-controls').appendTo(card);
            $('<a>').attr('href',url).text('下载原图').appendTo(actions);
            $('<button type="button">').text('删除').data('file-id',file.ID).appendTo(actions);
            container.append(card);
        });
        controls();
    }
    function saved(item, submitted) {
        setStatus(item); savedSnapshot = snapshot();
        $('#saveStatus').text(submitted ? '当前内容已提交' : currentStatus === 'SUBMITTED' ? '修改已保存 · 已提交' : '草稿已保存');
        notice(submitted ? '总结已提交，当前页面的最新内容已保存。' : '当前内容已保存。','success');
    }
    function persist(submitted) {
        if (busy || !loaded || !validate(true)) return;
        busy = true; controls(); notice(submitted ? '正在保存并提交…' : '正在保存…');
        api(submitted ? 'submit' : 'save',formData()).done(function (item) {
            saved(item,submitted);
            busy = false;
            window.location.replace(listLink() + '&saved=' + (submitted ? 'submitted' : 'saved'));
        })
            .fail(function (error) { notice(errorText(error),'error'); })
            .always(function () { busy = false; controls(); });
    }
    function uploadPhoto(file) {
        if (!file || busy || !loaded) return;
        if (!validate(!summaryId)) return;
        if (photos.length >= config.photoMax) { notice('活动照片最多上传' + config.photoMax + '张。','error'); return; }
        if (!/\.(jpe?g|png)$/i.test(file.name) || file.size <= 0 || file.size > config.photoSizeMax) { notice('请选择JPG/JPEG/PNG照片，单张不超过10MB。','error'); return; }
        busy = true; controls(); $('#photoMessage').removeClass('error').text('正在上传 ' + file.name + '…');
        var ready = summaryId ? $.Deferred().resolve().promise() : api('save',formData()).then(function (item) { saved(item,false); });
        ready.then(function () {
            var form = new FormData(); form.append('summaryId',summaryId); form.append('file',file);
            return api('upload',form,true);
        }).done(function (result) { renderPhotos(result.files); $('#photoMessage').text('照片已上传：' + file.name); })
            .fail(function (error) { $('#photoMessage').addClass('error').text(errorText(error)); })
            .always(function () { busy = false; $('#editorPhoto').val(''); controls(); });
    }
    function initEditor() {
        if (window.matchMedia) {
            var guideMedia = window.matchMedia('(max-width:800px)');
            $('.summary-guide').prop('open',!guideMedia.matches);
            guideMedia.addListener(function (event) { $('.summary-guide').prop('open',!event.matches); });
        }
        $('#summaryBack').attr('href',listLink()).on('click',function (event) {
            if (busy || (dirty() && !window.confirm('有尚未保存的修改，确定返回列表吗？'))) event.preventDefault();
            else savedSnapshot = snapshot();
        });
        window.addEventListener('beforeunload',function (event) { if (busy || dirty()) { event.preventDefault(); event.returnValue = ''; } });
        $('#summaryForm').on('submit',function (event) { event.preventDefault(); });
        $('#summaryForm input[type=text],#summaryForm textarea').on('input',function () { counts(); $('#saveStatus').text(dirty() ? '有未保存的修改' : '内容未改变'); });
        $('#editorSave').on('click',function () { persist(false); });
        $('#editorSubmit').on('click',function () { persist(true); });
        $('#editorPhoto').on('change',function () { uploadPhoto(this.files && this.files[0]); });
        $('#editorFiles').on('click','button',function () {
            if (busy || closed() || !window.confirm('确定删除这张活动照片吗？')) return;
            var id = $(this).data('file-id'); busy = true; controls();
            api('deleteFile',{fileId:id}).done(function () { renderPhotos($.grep(photos,function (file) { return file.ID !== id; })); $('#photoMessage').removeClass('error').text('照片已删除。'); })
                .fail(function (error) { $('#photoMessage').addClass('error').text(errorText(error)); })
                .always(function () { busy = false; controls(); });
        });
        api('get',{year:config.year, partyId:params.partyId || ''}).done(function (item) {
            $('#editorPartyName').text(item.PARTY_NAME); setStatus(item);
            $.each(fields,function (_, field) { $('#editor' + field[0]).val(item[field[2]] || ''); });
            loaded = true; savedSnapshot = snapshot(); counts(); renderPhotos(item.files);
            $('#saveStatus').text(summaryId ? '已读取保存的内容' : '尚未保存草稿');
            notice(closed() ? '填报已截止，当前为查看模式。' : '活动主题与背景可按实际情况修改。'); controls();
            setInterval(controls,1000);
        }).fail(function (error) { notice(errorText(error),'error'); });
    }
    api('config',root.attr('data-view') === 'edit' && params.year ? {year:params.year} : {}).done(function (result) {
        config = result; clockOffset = Number(config.serverTime) - Date.now();
        $('.summary-year').text(config.year);
        $('.summary-deadline-date').text(config.deadlineDate);
        $('.summary-deadline-weekday').text(config.deadlineWeekday);
        if (root.attr('data-view') === 'edit') initEditor();
        else {
            $('#summaryPartyName').val(params.partyName || ''); $('#summaryStatus').val(params.status || '');
            $('#summarySearchForm').on('submit',function (event) { event.preventDefault(); loadList(1); });
            $('#summaryPager').on('click','button',function () { loadList($(this).data('page')); });
            $('#summaryExport').on('click',exportExcel);
            loadList(Math.max(1,parseInt(params.page,10) || 1));
        }
    }).fail(function (error) { notice(errorText(error),'error'); });
}(jQuery));
