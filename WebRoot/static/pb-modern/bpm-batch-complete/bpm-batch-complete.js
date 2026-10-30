(function (window, $) {
  "use strict";

  function message(text) {
    if (window.layer && layer.msg) {
      layer.msg(text);
    } else {
      window.alert(text);
    }
  }

  function confirmBox(text, done) {
    if (window.layer && layer.confirm) {
      layer.confirm(text, { icon: 3, title: "提示" }, function (index) {
        layer.close(index);
        done();
      });
    } else if (window.confirm(text)) {
      done();
    }
  }

  function post(url, data, done) {
    var request = {
      url: url,
      type: "POST",
      dataType: "json",
      data: data,
      success: done,
      error: function () {
        message("批量办理请求失败，请检查服务日志");
      }
    };
    if (window.avicAjax && typeof window.avicAjax.ajax === "function") {
      window.avicAjax.ajax(request);
    } else {
      $.ajax(request);
    }
  }

  window.PbBpmBatchComplete = {
    attach: function (options) {
      options = options || {};
      var gridId = options.gridId;
      var toolbarId = options.toolbarId;
      if (!gridId || !toolbarId || !$("#" + gridId).length || !$("#" + toolbarId).length) {
        return false;
      }
      var buttonId = options.buttonId || "pbBpmBatchCompleteButton";
      if ($("#" + buttonId).length) {
        return true;
      }
      var button = $("<a>", {
        id: buttonId,
        href: "javascript:void(0)",
        class: "btn btn-primary form-tool-btn btn-sm",
        role: "button",
        title: "批量办理"
      }).text(options.label || "批量办理");
      $("#" + toolbarId).find(".toolbar-left").prepend(button);
      button.on("click", function () {
        var ids = $("#" + gridId).jqGrid("getGridParam", "selarrrow") || [];
        if (!ids.length) {
          message("请先选择记录");
          return;
        }
        confirmBox("仅办理当前用户处于 task4 的记录，确定继续吗？", function () {
          post(options.url || "platform/pb/bpm/batchComplete/operation", { ids: ids.join(",") }, function (result) {
            if (result && result.flag === "success") {
              message("已办理 " + (result.completed || ids.length) + " 条记录");
              $("#" + gridId).trigger("reloadGrid");
            } else {
              message((result && (result.errorMsg || result.error)) || "批量办理失败");
            }
          });
        });
      });
      return true;
    }
  };
}(window, jQuery));
