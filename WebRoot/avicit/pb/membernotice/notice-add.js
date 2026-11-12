(function ($) {
    'use strict';
    var base = 'platform/avicit/pb/membernotice/', savedId, busy = false, memberName = '', lookup;
    function message(text) { $('#notice-entry-message').text(text).show(); }
    function api(path, data, callback, method) {
        return $.ajax({url: base + path, type: method || 'GET', data: data, dataType: 'json'})
            .done(function (r) { if (r && r.ok) callback(r); else message(r && r.message || '登录状态已失效，请重新登录'); })
            .fail(function (_, status) { if (status !== 'abort') message('请求未完成，请核对结果后重试'); });
    }
    function title() {
        var formal = $('#notice-entry-type').val() === '正式党员';
        $('#notice-entry-probation').toggle(!formal).find('input').prop('disabled', formal || !!savedId);
        $('#notice-entry-formal').toggle(formal).find('input').prop('disabled', !formal || !!savedId);
        var text = memberName ? (formal ? '关于同意' + memberName + '同志转为中共正式党员的审批意见' : '关于批准发展' + memberName + '同志为中共预备党员的审批意见') : '党员发送阅知';
        $('#notice-entry-title').text(text); document.title = text;
    }
    function selectUser() {
        if (busy || savedId) return;
        new H5CommonSelect({type: 'userSelect', idFiled: 'notice-entry-user', textFiled: 'notice-entry-name', selectModel: 'single', callBack: function (user) {
            if (lookup) lookup.abort();
            var userId = user.userids;
            memberName = ''; $('#notice-entry-code,#notice-entry-org').val(''); title(); $('#notice-entry-message').hide();
            lookup = api('member', {userId: userId}, function (r) {
                if ($('#notice-entry-user').val() !== userId) return;
                memberName = r.member.NAME;
                $('#notice-entry-name').val(memberName); $('#notice-entry-code').val(r.member.USER_CODE);
                $('#notice-entry-org').val(r.member.PARTY_NAME || ''); title();
            });
        }});
    }
    $('#notice-entry-name,#notice-entry-select').on('click', selectUser);
    $('#notice-entry-select').on('keydown', function (event) { if (event.keyCode === 13 || event.keyCode === 32) { event.preventDefault(); selectUser(); } });
    $('#notice-entry-type').on('change', title);
    $('.notice-entry .date-picker').datepicker({dateFormat: 'yy-mm-dd'});
    function save(start) {
        if (busy) return;
        if (!$('#notice-entry-user').val() || !memberName) { message('请先选择已关联党员记录的用户'); return; }
        var data = $('#notice-add-form').serialize();
        busy = true; $('#notice-entry-save,#notice-entry-start,#notice-entry-cancel').prop('disabled', true);
        $('#notice-add-form :input').prop('disabled', true); $('#notice-entry-select').attr('aria-disabled', 'true');
        function done() {
            busy = false;
            if (!savedId) { $('#notice-add-form :input').prop('disabled', false); $('#notice-entry-select').removeAttr('aria-disabled'); title(); }
            $('#notice-entry-save,#notice-entry-start,#notice-entry-cancel').prop('disabled', false);
        }
        function finish() {
            if (!start) { message('通知已保存，可点击“发起流程”送达书记'); done(); return; }
            api('start', {ids: JSON.stringify([savedId])}, function (r) {
                if (r.successCount === 1) window.location.replace('platform/bpm/business/detail?id=' + encodeURIComponent(savedId) + '&extType=2');
                else message('通知已保存，' + r.results[0].message + '。可按原记录重试发起。');
            }, 'POST').always(done);
        }
        if (savedId) { finish(); return; }
        api('create', data, function (r) {
            savedId = r.id;
            $('#notice-entry-start').html('<i class="fa fa-send-o"></i> 发起流程'); finish();
        }, 'POST').always(function () { if (!savedId) done(); });
    }
    $('#notice-entry-save').on('click', function () { save(false); });
    $('#notice-entry-start').on('click', function () { save(true); });
    $('#notice-entry-cancel').on('click', function () { if (!busy) window.location.href = base + 'manage'; });
    $('#notice-add-form').on('submit', function (event) { event.preventDefault(); });
    title();
}(jQuery));
