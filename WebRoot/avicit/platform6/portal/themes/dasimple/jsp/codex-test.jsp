<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>codeX测试</title>
<style>
	.pb-codex-test-page {
		min-height: 100%;
		padding: 28px;
		box-sizing: border-box;
		color: #29384d;
		font-family: "Microsoft YaHei", Arial, sans-serif;
		background: #f5f7fb;
	}
	.pb-codex-test-page .panel {
		max-width: 860px;
		padding: 28px 32px;
		background: #fff;
		border: 1px solid #e4e8f0;
		border-radius: 6px;
		box-shadow: 0 8px 24px rgba(26, 45, 75, 0.08);
	}
	.pb-codex-test-page h1 {
		margin: 0 0 12px;
		color: #c91f35;
		font-size: 28px;
		font-weight: 700;
		letter-spacing: 0;
	}
	.pb-codex-test-page p {
		margin: 0 0 20px;
		color: #5f6f86;
		font-size: 15px;
		line-height: 1.8;
	}
	.pb-codex-test-page .items {
		display: table;
		width: 100%;
		border-collapse: collapse;
	}
	.pb-codex-test-page .item {
		display: table-row;
	}
	.pb-codex-test-page .label,
	.pb-codex-test-page .value {
		display: table-cell;
		padding: 12px 14px;
		border-top: 1px solid #eef1f6;
		font-size: 14px;
	}
	.pb-codex-test-page .label {
		width: 130px;
		color: #7a8798;
		background: #fafbfe;
	}
	.pb-codex-test-page .value {
		color: #29384d;
	}
</style>
</head>
<body>
<div class="pb-codex-test-page">
	<div class="panel">
		<h1>codeX测试</h1>
		<p>这是一个挂在“党委工作”菜单下的本地测试页面，用来验证门户菜单入口和页签打开流程。</p>
		<div class="items">
			<div class="item">
				<div class="label">页面状态</div>
				<div class="value">已打开</div>
			</div>
			<div class="item">
				<div class="label">入口位置</div>
				<div class="value">门户首页 - 党委工作 - codeX测试</div>
			</div>
			<div class="item">
				<div class="label">影响范围</div>
				<div class="value">仅当前门户测试入口，不修改数据库菜单和权限配置</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
