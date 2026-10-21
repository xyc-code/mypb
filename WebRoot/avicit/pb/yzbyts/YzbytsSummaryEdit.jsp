<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="avicit.platform6.commons.utils.ViewUtil" %>
<% String importlibs = "common"; %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <base href="<%=ViewUtil.getRequestPath(request)%>">
    <title>一支部一特色年度总结</title>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp"><jsp:param value="<%=importlibs%>" name="importlibs"/></jsp:include>
    <jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp"><jsp:param value="<%=importlibs%>" name="importlibs"/></jsp:include>
    <link rel="stylesheet" href="static/pb-modern/yzbyts/yzbyts-summary.css?v=20261021r4">
</head>
<body>
<main class="pb-yzbyts-summary-page" data-view="edit">
    <div class="summary-shell summary-form-shell">
        <nav class="summary-breadcrumb"><a id="summaryBack" href="platform/avicit/pb/yzbyts/summary/toManage">← 返回总结列表</a><span>支部特色建设 / 年度总结填报</span></nav>
        <header class="summary-header summary-editor-header">
            <div class="summary-title-block"><div class="summary-document-icon" aria-hidden="true">总<span>结</span></div><div><div class="summary-eyebrow"><span class="summary-year">—</span> 年度 · 支部特色建设</div><h1>一支部一特色年度总结</h1><div class="summary-organization"><span id="editorPartyName">正在读取党组织…</span><span id="editorStatus" class="summary-badge">读取中</span></div></div></div>
            <div class="summary-deadline"><span>报送截止日期</span><strong class="summary-deadline-date">—</strong><small>星期<span class="summary-deadline-weekday">—</span> · 当日23:59:59截止</small></div>
        </header>
        <div id="summaryMessage" class="summary-message" role="status" aria-live="polite">正在读取总结…</div>
        <div class="summary-workspace">
            <form id="summaryForm" class="summary-paper" novalidate>
                <fieldset id="summaryFields" disabled>
                    <section class="summary-form-section"><div class="summary-section-heading"><span class="summary-section-mark" aria-hidden="true"></span><div><h2>活动概况</h2><p>明确活动主题、目标及开展背景</p></div></div>
<div class="summary-field"><div class="summary-field-heading"><label for="editorTheme">活动主题</label><span id="countTheme" class="summary-count">0 / 1000 字</span></div><input id="editorTheme" name="activityTheme" type="text" aria-describedby="countTheme" required aria-required="true"><p class="summary-field-note">由申报表预填，可按实际情况修改。</p></div><div class="summary-field-grid"><div class="summary-field"><div class="summary-field-heading"><label for="editorGoal">活动目标</label><span id="countGoal" class="summary-count">0 / 70 字</span></div><textarea id="editorGoal" name="activityGoal" class="summary-text-small" aria-describedby="countGoal" required aria-required="true"></textarea></div><div class="summary-field"><div class="summary-field-heading"><label for="editorBackground">活动背景</label><span id="countBackground" class="summary-count">0 / 250 字</span></div><textarea id="editorBackground" name="activityBackground" class="summary-text-small" aria-describedby="countBackground" required aria-required="true"></textarea><p class="summary-field-note">由申报表预填，可按实际情况修改。</p></div></div></section>
                    <section class="summary-form-section"><div class="summary-section-heading"><span class="summary-section-mark" aria-hidden="true"></span><div><h2>工作开展与成效</h2><p>写清具体做法，用数据或具体结果呈现成效</p></div></div>
<div class="summary-field"><div class="summary-field-heading"><label for="editorThought">工作思路</label><span id="countThought" class="summary-count">0 / 50 字</span></div><textarea id="editorThought" name="workThought" class="summary-text-compact" aria-describedby="countThought" required aria-required="true"></textarea></div><div class="summary-field-grid summary-results-grid"><div class="summary-field"><div class="summary-field-heading"><label for="editorPractice">具体做法</label><span id="countPractice" class="summary-count">0 / 550 字</span></div><textarea id="editorPractice" name="practice" class="summary-text-large" aria-describedby="countPractice" required aria-required="true"></textarea></div><div class="summary-field"><div class="summary-field-heading"><label for="editorAchievement">突出成效</label><span id="countAchievement" class="summary-count">0 / 200 字</span></div><textarea id="editorAchievement" name="achievement" class="summary-text-large" aria-describedby="countAchievement" required aria-required="true"></textarea></div></div></section>
                    <section class="summary-form-section summary-photos"><div class="summary-section-heading"><span class="summary-section-mark" aria-hidden="true"></span><div><h2>活动照片 <span id="photoCount" class="summary-count">0 / 4 张</span></h2><p>照片选填，最多4张，JPG / JPEG / PNG，单张不超过10MB；导出时照片嵌入Excel。</p></div></div>
                        <div id="editorFiles" class="summary-photo-grid"></div>
                        <label class="summary-upload" for="editorPhoto"><span class="summary-upload-plus" aria-hidden="true">＋</span><span><strong>选择活动照片</strong><span>首次上传前请填全六项文字，上传时自动保存草稿</span></span></label><input id="editorPhoto" type="file" accept=".jpg,.jpeg,.png,image/jpeg,image/png">
                        <p id="photoMessage" class="summary-upload-message" role="status" aria-live="polite"></p>
                    </section>
                </fieldset>
            </form>
            <details class="summary-guide" open><summary class="summary-guide-heading"><span class="summary-note-icon">!</span><div><h2>填报说明</h2><p>报送前请逐项核对</p></div></summary><ol><li>本次活动总结坚持为提升基层党建工作质效，切实为基层减轻负担，不组织现场汇报；</li><li>总结内容真实，只填报实际工作成果，杜绝空话套话，不夸大成效；</li><li>控制字数，表述清晰、逻辑连贯，坚持用数据支撑，无数据则写明具体结果，不使用“效果显著”等模糊表述；</li><li>请于11月10日（<span class="summary-deadline-weekday">—</span>）前报送总结。</li></ol><div class="summary-guide-footer"><strong>填写提示</strong><p>六项文字均为必填，保存和提交时都须填全；照片选填。各项字数上限已标注在字段右侧。保存成功后将自动返回总结列表。</p></div></details>
        </div>
        <footer class="summary-actions"><div class="summary-save-caption"><span class="summary-save-dot" aria-hidden="true"></span><div><strong id="saveStatus">尚未保存修改</strong><span id="saveHint">保存成功后自动返回列表</span></div></div><div class="summary-action-buttons"><button type="button" id="editorSave" class="summary-secondary" disabled>保存草稿</button><button type="button" id="editorSubmit" class="summary-primary" disabled>提交总结</button></div></footer>
    </div>
</main>
<script src="static/pb-modern/yzbyts/yzbyts-summary.js?v=20261021r7"></script>
</body>
</html>
