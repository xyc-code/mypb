<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="sec" uri="/WEB-INF/tags/shiro.tld"%>
<%@taglib prefix="pt6" uri="/WEB-INF/tags/platform6.tld"%>
<%@ page import="avicit.platform6.commons.utils.ViewUtil"%>
<% 
String importlibs = "common,treeview";	
%>
<!DOCTYPE html>
<HTML>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<HEAD>
<!-- ControllerPath = "demo/demoreception/demoReceptionController/operation/Add/null" -->
<title>添加</title>
<base href="<%=ViewUtil.getRequestPath(request)%>">
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-css.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>

</HEAD>
  <body>
  	<div class="container">
      <h1>Bootstrap Tree View - DOM Tree</h1>
      <br/>
      <div class="row">
        <div class="col-sm-12">
          <label for="treeview"></label>
          <div id="treeview"/>
        </div>
      </div>
    </div>
<jsp:include page="/avicit/platform6/h5component/common/h5uiinclude-js.jsp">
<jsp:param value="<%=importlibs%>" name="importlibs"/>
</jsp:include>
  	<script type="text/javascript">

      function buildDomTree() {
        var data = [];

        function walk(nodes, data) {
          if (!nodes) { return; }
          $.each(nodes, function (id, node) {
            var obj = {
              id: id,
              text: node.nodeName + " - " + (node.innerText ? node.innerText : ''),
              tags: [node.childElementCount > 0 ? node.childElementCount + ' child elements' : '']
            };
            if (node.childElementCount > 0) {
              obj.nodes = [];
              walk(node.children, obj.nodes);
            }
            data.push(obj);
          });
        }

        walk($('html')[0].children, data);
        return data;
      }

      $(function() {

        var options = {
          bootstrap2: false, 
          showTags: true,
          levels: 5,
          data: buildDomTree()
        };

        $('#treeview').treeview(options);
      });
  	</script>
  </body>
