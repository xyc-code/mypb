<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css"
          href="css/style.css" />
    <link rel="stylesheet" type="text/css"
          href="../../../../static/h5/layer-v2.3/layer/skin/layer.css">
    <script type="text/javascript"
            src="../../../../static/h5/jquery/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="./js/onlineapi.js"></script>
    <script type="text/javascript"
            src="js/clipboard.min.js"></script>

</head>

<body>
<div class="codeGenerator" >
    <div id="sysDeptAPI">
        <div class="contentTitle">
            <h2>SysDeptAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>平台组织部门管理使用接口</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SysDept</td>
                    <td>getSysDeptByDeptCode</td>
                    <td>根据部门code获取部门信息</td>
                </tr>
                <tr>
                    <td>SysDept</td>
                    <td>getSysDeptBySysDeptId</td>
                    <td>根据部门ID获取部门信息</td>
                </tr>
                <tr>
                    <td>Sting</td>
                    <td>getSysDeptNameBySysDeptId</td>
                    <td>通过部门ID和语言代码得到部门名称</td>
                </tr>
                <tr>
                    <td>List&lt;SysDept&gt;</td>
                    <td>getAllSysDeptList</td>
                    <td>获取所有部门</td>
                </tr>
                <tr>
                    <td>SysDept</td>
                    <td>getParentSysDeptBySysDeptId</td>
                    <td>通过部门ID得到其直接父部门</td>
                </tr>
                <tr>
                    <td>List&lt;SysDept&gt;</td>
                    <td>getAllSubSysDeptListBySysDeptId</td>
                    <td>通过部门ID得到其所有子部门</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getSysDeptByDeptCode">
                <h3>getSysDeptByDeptCode</h3>
                <ul>
                    <li>根据部门code获取部门信息。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">deptCode</td>
                        <td>部门编码</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysDept</td>
                        <td>部门对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysDeptBySysDeptId">
                <h3>getSysDeptBySysDeptId</h3>
                <ul>
                    <li>根据部门ID获取部门信息。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">deptId</td>
                        <td>部门ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysDept</td>
                        <td>部门对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysDeptNameBySysDeptId">
                <h3>getSysDeptNameBySysDeptId</h3>
                <ul>
                    <li>通过部门ID和语言代码得到部门名称。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">deptId</td>
                        <td>部门ID</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">LanguageCode</td>
                        <td>语言编码</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">String</td>
                        <td>部门名称</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getAllSysDeptList">
                <h3>getAllSysDeptList</h3>
                <ul>
                    <li>获取所有部门。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysDept&gt;</td>
                        <td>部门对象列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getParentSysDeptBySysDeptId">
                <h3>getParentSysDeptBySysDeptId</h3>
                <ul>
                    <li>通过部门ID得到其直接父部门。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">deptId</td>
                        <td>部门ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysDept</td>
                        <td>部门对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getAllSubSysDeptListBySysDeptId">
                <h3>getAllSubSysDeptListBySysDeptId</h3>
                <ul>
                    <li>通过部门ID得到其所有子部门。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">deptId</td>
                        <td>部门ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysDept&gt;</td>
                        <td>部门对象列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<!-- 用户部门岗位关系API常用方法 -->
<div class="codeGenerator" >
    <div id="sysUserDeptPositionAPI">
        <div class="contentTitle">
            <h2>SysUserDeptPositionAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>用户部门岗位关系API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SysDept</td>
                    <td>getChiefDeptBySysUserId</td>
                    <td>根据用户ID获取用户主部门信息</td>
                </tr>
                <tr>
                    <td>List&lt;SysDept&gt;</td>
                    <td>getSysDeptListBySysUserId</td>
                    <td>获取当前用户的主部门和兼职部门</td>
                </tr>
                <tr>
                    <td>List&lt;SysUser&gt;</td>
                    <td>getSysUserListBySysDeptId</td>
                    <td>通过部门ID得到当前部门下的所有直接用户</td>
                </tr>
                <%--<tr>
                    <td>List&lt;SysUser&gt;</td>
                    <td>getSysUserListBySysDeptId</td>
                    <td>通过部门ID得到当前部门下的所有用户,包含子部门的用户</td>
                </tr>--%>
                </tbody>
            </table>
            <div class="singlyCode" id="getChiefDeptBySysUserId">
                <h3>getChiefDeptBySysUserId</h3>
                <ul>
                    <li>根据用户ID获取用户主部门信息。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysDept</td>
                        <td>部门对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysDeptListBySysUserId">
                <h3>getSysDeptListBySysUserId</h3>
                <ul>
                    <li>获取当前用户的主部门和兼职部门。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysDept&gt;</td>
                        <td>部门对象列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysUserListBySysDeptId">
                <h3>getSysUserListBySysDeptId</h3>
                <ul>
                    <li>1.第二各参数为true，表示通过部门ID得到当前部门下的所有直接用户</li>
                    <li>2.第二各参数为false，表示通过部门ID得到当前部门下的所有所有用户（包含）子部门</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>参数类型</th>
                            <th style="text-align: left;">参数名</th>
                            <th>说明</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">deptId</td>
                            <td>部门ID</td>
                        </tr>
                        <tr>
                            <td>请求参数</td>
                            <td style="text-align: left;">true/false</td>
                            <td>true：获取直接子部门用户/false：获取所有部门用户（含子部门）</td>
                        </tr>
                        <tr>
                            <td>返回参数</td>
                            <td style="text-align: left;">List&lt;SysUser&gt;</td>
                            <td>用户列表</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <%--<div class="singlyCode" id="getSysUserListBySysDeptId">
                <h3>getSysUserListBySysDeptId</h3>
                <ul>
                    <li>通过部门ID得到当前部门下的所有用户,包含子部门的用户。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">deptId</td>
                        <td>部门ID</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">false</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysUser&gt;</td>
                        <td>用户列表</td>
                    </tr>
                    </tbody>
                </table>
            </div>--%>
        </div>
    </div>
</div>
<!-- 用户API常用方法 -->
<div class="codeGenerator" >
    <div id="sysUserAPI">
        <div class="contentTitle">
            <h2>SysUserAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>用户API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>SysUser</td>
                    <td>getSysUserById</td>
                    <td>通过用户ID获取用户对象</td>
                </tr>
                <tr>
                    <td>SysUser</td>
                    <td>getSysUserByLoginName</td>
                    <td>根据登录账号获取用户对象</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>getSysUserNameById</td>
                    <td>通过用户id获得用户名称</td>
                </tr>
                <tr>
                    <td>List&lt;Dept&gt;</td>
                    <td>getDeptsBySysUser</td>
                    <td>根据用户id获取用户所有部门</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getSysUserById">
                <h3>getSysUserById</h3>
                <ul>
                    <li>通过用户ID获取用户对象。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysUser</td>
                        <td>用户对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysUserByLoginName">
                <h3>getSysUserByLoginName</h3>
                <ul>
                    <li>根据登录账号获取用户对象。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">loginName</td>
                        <td>登录账号</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysUser</td>
                        <td>用户对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysUserNameById">
                <h3>getSysUserNameById</h3>
                <ul>
                    <li>通过用户id获得用户名称。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">String</td>
                        <td>用户名称</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getDeptsBySysUser">
                <h3>getDeptsBySysUser</h3>
                <ul>
                    <li>根据用户id获取用户所有部门。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysDept&gt;</td>
                        <td>部门列表</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!--系统参数API常用方法-->
<div class="codeGenerator" >
    <div id="sysProfileAPI">
        <div class="contentTitle">
            <h2>SysProfileAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>系统参数API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>String</td>
                    <td>getProfileValueByCodeByAppId</td>
                    <td>根据系统参数的代码获取系统参数的值</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getProfileValueByCodeByAppId">
                <h3>getProfileValueByCodeByAppId</h3>
                <ul>
                    <li>根据系统参数的代码获取系统参数的值。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">strProfileOptionCode</td>
                        <td>系统参数编码</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">applicationId</td>
                        <td>应用ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">String</td>
                        <td>系统参数值</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<!--通用代码API常用方法-->
<div class="codeGenerator" >
    <div id="sysLookupAPI">
        <div class="contentTitle">
            <h2>SysLookupAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>通用代码API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Collection&lt;SysLookupSimpleVo&gt;</td>
                    <td>getLookUpListByType</td>
                    <td>通过通用代码type值和应用ID获取数据项列表信息</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>getNameByLooupTypeCodeAndLooupCodeByAppId</td>
                    <td>通过通用代码type值、数据项code和应用ID获取数据项名称</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getLookUpListByType">
                <h3>getLookUpListByType</h3>
                <ul>
                    <li>通过通用代码type值和应用ID获取数据项列表信息。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">lookupType</td>
                        <td>通用编码类型</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">applicationId</td>
                        <td>应用ID</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">currentLanguageCode</td>
                        <td>语言编码</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">Collection&lt;SysLookupSimpleVo&gt;</td>
                        <td>数据项列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getNameByLooupTypeCodeAndLooupCodeByAppId">
                <h3>getNameByLooupTypeCodeAndLooupCodeByAppId</h3>
                <ul>
                    <li>通过通用代码type值、数据项code和应用ID获取数据项名称。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">lookupType</td>
                        <td>通用编码类型</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">lookupCode</td>
                        <td>通用编码代码</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">applicationId</td>
                        <td>应用ID</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">currentLanguageCode</td>
                        <td>语言编码</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">String</td>
                        <td>数据项名称</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<!--角色API常用方法-->
<div class="codeGenerator" >
    <div id="sysRoleAPI">
        <div class="contentTitle">
            <h2>SysRoleAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>角色API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>List&lt;SysRole&gt;</td>
                    <td>getRolesByUserId</td>
                    <td>获取用户在指定应用下的所有角色</td>
                </tr>
                <tr>
                    <td>SysRole</td>
                    <td>getSysRoleById</td>
                    <td>根据角色ID返回角色对象</td>
                </tr>
                <tr>
                    <td>SysRole</td>
                    <td>getSysRoleByRoleCodeAndAppId</td>
                    <td>根据角色代码和应用ID获取角色对象</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getRolesByUserId">
                <h3>getRolesByUserId</h3>
                <ul>
                    <li>获取用户在指定应用下的所有角色。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">applicationId</td>
                        <td>应用ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysRole&gt;</td>
                        <td>角色列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysRoleById">
                <h3>getSysRoleById</h3>
                <ul>
                    <li>根据角色ID返回角色对象。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">roleId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysRole</td>
                        <td>角色对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysRoleByRoleCodeAndAppId">
                <h3>getSysRoleByRoleCodeAndAppId</h3>
                <ul>
                    <li>根据角色代码和应用ID获取角色对象。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">roleCode</td>
                        <td>角色编码</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">applicationId</td>
                        <td>应用ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">SysRole</td>
                        <td>角色对象</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<!--用户角色API常用方法-->
<div class="codeGenerator" >
    <div id="sysUserRoleAPI">
        <div class="contentTitle">
            <h2>SysUserRoleAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>用户角色API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>List&lt;SysUser&gt;</td>
                    <td>getSysUserListBySysRoleId</td>
                    <td>通过角色ID得到用户列表</td>
                </tr>
                <tr>
                    <td>List&lt;SysUser&gt;</td>
                    <td>getSysUserListBySysRoleCode</td>
                    <td>通过角色Code得到用户列表</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getSysUserListBySysRoleId">
                <h3>getSysUserListBySysRoleId</h3>
                <ul>
                    <li>通过角色ID得到用户列表。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">roleId</td>
                        <td>角色ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysUser&gt;</td>
                        <td>用户列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSysUserListBySysRoleCode">
                <h3>getSysUserListBySysRoleCode</h3>
                <ul>
                    <li>通过角色Code得到用户列表。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">roleCode</td>
                        <td>角色code</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;SysUser&gt;</td>
                        <td>用户列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<!--编码管理API常用方法-->
<div class="codeGenerator" >
    <div id="sysAutoCodeAPI">
        <div class="contentTitle">
            <h2>SysAutoCodeAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>编码管理API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Map&lt;String, String&gt;</td>
                    <td>autoGenerationCodeValue</td>
                    <td>生成编码值（后台专用）（新生成一个编码值）</td>
                </tr>
                <tr>
                    <td>boolen</td>
                    <td>deleteAutoCodeValueByBusinessId</td>
                    <td>删除业务ID关联的编码值</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="autoGenerationCodeValue">
                <h3>autoGenerationCodeValue</h3>
                <ul>
                    <li>生成编码值（后台专用）（新生成一个编码值）。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">Map&lt;String, String&gt;</td>
                        <td>生成的编码信息</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="deleteAutoCodeValueByBusinessId">
                <h3>deleteAutoCodeValueByBusinessId</h3>
                <ul>
                    <li>删除业务ID关联的编码值。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">id</td>
                        <td>业务ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">boolean</td>
                        <td>删除状态</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<!--菜单管理API常用方法-->
<div class="codeGenerator" >
    <div id="sysPersonalMenuAPI">
        <div class="contentTitle">
            <h2>SysPersonalMenuAPI</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>菜单管理API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>List&lt;HashMap&lt;String, Object&gt;&gt;</td>
                    <td>getPersonalMenu</td>
                    <td>获取个人可用菜单</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>deleteByMenuId</td>
                    <td>根据菜单id删除相关记录</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getPersonalMenu">
                <h3>getPersonalMenu</h3>
                <ul>
                    <li>获取个人可用菜单。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">orgIdentity</td>
                        <td>组织机构</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">List&lt;HashMap&lt;String, Object&gt;&gt;</td>
                        <td>菜单列表</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="deleteByMenuId">
                <h3>deleteByMenuId</h3>
                <ul>
                    <li>根据菜单id删除相关记录。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">menuIds</td>
                        <td>菜单ID</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">userId</td>
                        <td>用户ID</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">String</td>
                        <td>受影响行数</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>
<!--工具类API常用方法-->
<div class="codeGenerator" >
    <div id="comUtil">
        <div class="contentTitle">
            <h2>ComUtil</h2>
            <div class="custom-block tip">
                <p class="custom-block-title">说明</p>
                <p>工具类API常用方法</p>
            </div>
        </div>
        <div class="tableStructure">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <thead>
                <tr>
                    <th width="20%">返回值</th>
                    <th width="40%">方法名称</th>
                    <th width="40%">方法描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>String</td>
                    <td>getId</td>
                    <td>取得不重复的32位字符串</td>
                </tr>
                <tr>
                    <td>int</td>
                    <td>getHashInt</td>
                    <td>哈希分表算法</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>replaceNull2Space</td>
                    <td>null字符串转化为""</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>Date2String</td>
                    <td>时间转字符串</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>String2Date</td>
                    <td>字符串转时间</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>getRequestPath</td>
                    <td>获取项目基础请求路径</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>getSqlEscapeStr</td>
                    <td>对sql字符片段进行转义</td>
                </tr>
                <tr>
                    <td>String</td>
                    <td>getHtmlEscapeStr</td>
                    <td>对html字符片段进行转义</td>
                </tr>
                <tr>
                    <td>ByteArrayOutputStream</td>
                    <td>byte2OutputStream</td>
                    <td>字节数组转化为字节数组输出流</td>
                </tr>
                </tbody>
            </table>
            <div class="singlyCode" id="getId">
                <h3>getId</h3>
                <ul>
                    <li>取得不重复的32位字符串。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">--</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">string</td>
                        <td>不重复ID</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getHashInt">
                <h3>getHashInt</h3>
                <ul>
                    <li>哈希分表算法。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">id</td>
                        <td>记录ID,String</td>
                    </tr>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">modNum</td>
                        <td>取模数,int</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">int</td>
                        <td>表名后缀</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="replaceNull2Space">
                <h3>replaceNull2Space</h3>
                <ul>
                    <li>null字符串转化为""。</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">string</td>
                        <td>原字符串,String</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">string</td>
                        <td>转换后的字符串</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="Date2String">
                <h3>Date2String</h3>
                <ul>
                    <li>时间转字符串</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">date</td>
                        <td>需要转化的时间,Date</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">string</td>
                        <td>转化以后的字符串结果</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="String2Date">
                <h3>String2Date</h3>
                <ul>
                    <li>字符串转时间</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">string</td>
                        <td>需要转换的字符串,String</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">date</td>
                        <td>转化以后的时间结果</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getRequestPath">
                <h3>getRequestPath</h3>
                <ul>
                    <li>获取项目基础请求路径</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">httpServletRequest</td>
                        <td>客户端请求对象,HttpServletRequest</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">string</td>
                        <td>项目基础路径，例：http://localhost:8080/v6r35/</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getSqlEscapeStr">
                <h3>getSqlEscapeStr</h3>
                <ul>
                    <li>对sql字符片段进行转义</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">string</td>
                        <td>需要转义的sql片段,String</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">string</td>
                        <td>转义后的sql片段</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="getHtmlEscapeStr">
                <h3>getHtmlEscapeStr</h3>
                <ul>
                    <li>对html字符片段进行转义</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">string</td>
                        <td>需要转义的html片段,String</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">string</td>
                        <td>转义后的html片段</td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <div class="singlyCode" id="byte2OutputStream">
                <h3>byte2OutputStream</h3>
                <ul>
                    <li>字节数组转化为字节数组输出流</li>
                </ul>
                <h4>参数说明：</h4>
                <table width="60%" border="0" cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>参数类型</th>
                        <th style="text-align: left;">参数名</th>
                        <th>说明</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>请求参数</td>
                        <td style="text-align: left;">bytes</td>
                        <td>字节数组,byte[]</td>
                    </tr>
                    <tr>
                        <td>返回参数</td>
                        <td style="text-align: left;">byteArrayOutputStream</td>
                        <td>字节数组输出流</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</div>

</body>
<script>
    $(document).ready(function() {
        //点击复制
        textCopy("btn");
        //初始化父页面高度
        initParentHeight();
    })
</script>

</html>