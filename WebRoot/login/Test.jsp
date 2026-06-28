<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%@page import="avicit.platform6.core.spring.SpringFactory"%>
<html>
<head>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<title>选择</title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<script src="../static/js/platform/component/jQuery/jQuery-1.8.2/jquery-1.8.2.js" type="text/javascript"></script>
<style type="text/css">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Microsoft YaHei", sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4edf9 100%);
    color: #333;
    line-height: 1.6;
    padding: 20px;
    min-height: 100vh;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.panel {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    padding: 20px;
    flex: 1;
    min-width: 300px;
}

.panel-title {
    font-size: 18px;
    color: #2c3e50;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #3498db;
}
.tree-container {
    border: 1px solid #e1e1e1;
    border-radius: 8px;
    padding: 15px;
    background: #f9f9f9;
    max-height: 500px;
    overflow-y: auto;
}
.tree-node {
    margin-left: 15px;
    position: relative;
}
.tree-node-label {
    display: flex;
    align-items: center;
    padding: 8px 0;
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 4px;
}

.tree-node-label:hover {
    background-color: #f0f0f0;
}
.tree-node-children {
    margin-left: 20px;
    display: none;
}
.tree-node.expanded > .tree-node-children {
    display: block;
}
.tree-toggle {
    width: 21px;
    height: 21px;
    margin-right: 8px;
    cursor: pointer;
    transition: transform 0.3s;
    flex-shrink: 0;
    background-image: url(../static/h5/jquery-ztree/3.5.12/css/zTreeStyle/img/metro.png);
    background-position: -125px -84px;
}
.tree-node.expanded > .tree-node-label > .tree-toggle {
	background-position: -104px -84px;
}
.tree-node-leaf > .tree-node-label > .tree-toggle {
    visibility: hidden;
}
.tree-label {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
}

.result-panel {
    padding: 15px;
    border-radius: 8px;
    background: #fff;
    min-height: 150px;
}
.selected-platforms {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
}
.platform-tag {
    background-color: #3498db;
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}
.platform-tag::before {
    content: "✓";
}
.no-selection {
    color: #95a5a6;
    font-style: italic;
    padding: 10px;
    text-align: center;
}
.header {
    text-align: center;
    margin-bottom: 30px;
}

.header h1 {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 10px;
}
.header p {
    color: #7f8c8d;
    max-width: 600px;
    margin: 0 auto;
}
.footer {
    text-align: center;
    margin-top: 30px;
    color: #7f8c8d;
    font-size: 14px;
}
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}
</style>
</head>
<body>
<div class="header">
    <h1>刊发平台选择器</h1>
    <p>使用树形控件选择您需要发布的平台，支持多级选择和父子联动功能</p>
</div>
<div class="container">
    <div class="panel">
        <h2 class="panel-title">平台列表</h2>
        <div class="tree-container" id="platformTree"></div>
    </div>
    <div class="panel">
        <h2 class="panel-title">已选择平台</h2>
        <div class="result-panel">
            <div id="selectedPlatforms" class="no-selection">未选择任何平台</div>
        </div>
    </div>
</div>
<div class="footer">
    <p>jQuery实现版 | 支持多级选择 | 父子联动</p>
</div>
<script type="text/javascript">
//刊发平台数据
const platformData = [
    {
        id: 'internal',
        name: '对内宣传',
        children: [
            { id: 'eastern-news', name: '东安报' },
            { id: 'eastern-wechat', name: '东安微信' }
        ]
    },
    {
        id: 'external',
        name: '对外宣传',
        children: [
            {
                id: 'group',
                name: '集团',
                children: [
                    { id: 'group-website', name: '集团网站' },
                    { id: 'group-wechat', name: '集团微信' }
                ]
            },
            {
                id: 'provinces',
                name: '省市',
                children: [
                    { id: 'beijing', name: '北京平台' },
                    { id: 'shanghai', name: '上海平台' }
                ]
            }
        ]
    }
];

// 默认选中的平台ID数组
const defaultSelected = ['eastern-news', 'group-wechat'];
// 渲染树结构
function renderTree(data, container) {
    container.empty();
    $.each(data, function(_, item) {
        const node = createTreeNode(item);
        container.append(node);
        // 设置默认展开状态
        if (hasSelectedChild(item)) {
            node.addClass('expanded');
        }
    });
}
// 创建树节点（使用jQuery）
function createTreeNode(item) {
    const node = $('<div>').addClass('tree-node');
    const isLeaf = !item.children || item.children.length === 0;
    if (!isLeaf) {
        node.addClass('has-children');
    } else {
        node.addClass('tree-node-leaf');
    }
    
    const label = $('<div>').addClass('tree-node-label');
    const toggle = $('<div>').addClass('tree-toggle');
    label.append(toggle);
    
    const checkbox = $('<input>', {
        type: 'checkbox',
        id: item.id,
        'data-name': item.name
    });
    
    // 设置默认选中状态
    if (defaultSelected.includes(item.id)) {
        checkbox.prop('checked', true);
    }
    
    const text = $('<label>', {
        text: item.name,
        'for': item.id
    });
    const labelContent = $('<div>').addClass('tree-label').append(checkbox).append(text);
    
    label.append(labelContent);
    node.append(label);
    
    if (!isLeaf) {
        const childrenContainer = $('<div>').addClass('tree-node-children');
        $.each(item.children, function(_, child) {
            childrenContainer.append(createTreeNode(child));
        });
        node.append(childrenContainer);
        
        // 添加展开/折叠事件
        toggle.on('click', function(e) {
            e.stopPropagation();
            node.toggleClass('expanded');
        });
    }
    
    // 添加复选框事件
    checkbox.on('change', function() {
        updateSelection($(this));
        updateSelectedPlatforms();
    });
    return node;
}
// 检查节点是否有被选中的子节点
function hasSelectedChild(item) {
    if (!item.children) return false;
    return item.children.some(function(child) {
        return defaultSelected.includes(child.id) || 
              (child.children && hasSelectedChild(child));
    });
}

// 更新选择状态(父子联动)
function updateSelection(checkbox) {
    const node = checkbox.closest('.tree-node');
    // 向下选择子节点
    const childrenCheckboxes = node.find('.tree-node-children input[type="checkbox"]');
    childrenCheckboxes.prop('checked', checkbox.prop('checked')).prop('indeterminate', false);
    // 向上更新父节点状态
    updateParentStatus(node);
}

// 更新父节点状态
function updateParentStatus(node) {
    const parentNode = node.parent().closest('.tree-node');
    if (!parentNode.length) return;
    const parentCheckbox = parentNode.find('> .tree-node-label input[type="checkbox"]');
    const siblings = parentNode.find('> .tree-node-children > .tree-node');
    let checkedCount = 0;
    let indeterminateCount = 0;
    
    siblings.each(function() {
        const cb = $(this).find('> .tree-node-label input[type="checkbox"]');
        if (cb.prop('checked')) checkedCount++;
        if (cb.prop('indeterminate')) indeterminateCount++;
    });
    if (checkedCount === siblings.length) {
        parentCheckbox.prop('checked', true).prop('indeterminate', false);
    } else if (checkedCount > 0 || indeterminateCount > 0) {
        parentCheckbox.prop('checked', false).prop('indeterminate', true);
    } else {
        parentCheckbox.prop('checked', false).prop('indeterminate', false);
    }
    // 递归向上更新
    updateParentStatus(parentNode);
}

// 更新已选平台显示
function updateSelectedPlatforms() {
    const selected = [];
    $('#platformTree input[type="checkbox"]:checked').each(function() {
        const name = $(this).data('name');
        if (name) selected.push(name);
    });
    const container = $('#selectedPlatforms');
    container.empty();
    
    if (selected.length === 0) {
        container.addClass('no-selection').text('未选择任何平台');
    } else {
        container.removeClass('no-selection');
        const tagsContainer = $('<div>').addClass('selected-platforms');
        $.each(selected, function(_, name) {
            tagsContainer.append($('<div>').addClass('platform-tag').text(name));
        });
        container.append(tagsContainer);
    }
}

// 初始化
$(document).ready(function() {
    // 渲染树结构
    renderTree(platformData, $('#platformTree'));
    
    // 初始化父节点状态
    $('#platformTree .tree-node.has-children').each(function() {
        updateParentStatus($(this));
    });
    
    // 初始化显示已选平台
    updateSelectedPlatforms();
});
</script>
</body>
</html>
