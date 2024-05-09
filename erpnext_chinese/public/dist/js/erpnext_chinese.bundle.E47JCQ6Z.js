(() => {
  // ../erpnext_chinese/erpnext_chinese/public/erpnext_chinese.bundle.js
  $(document).on("page-change", function() {
    setTimeout(
      function() {
        if (frappe.boot.lang == "zh" && frappe.get_route() && (frappe.get_route().at(-1) == "Workspaces" || frappe.get_route()[0] == "Workspaces")) {
          let trans_map = [
            ["Reports &amp; Masters", "\u4E3B\u6570\u636E\u3001\u4E1A\u52A1\u4EA4\u6613\u3001\u62A5\u8868"],
            ["Masters & Reports", "\u4E3B\u6570\u636E\u3001\u4E1A\u52A1\u4EA4\u6613\u3001\u62A5\u8868"],
            ["Reports & Masters", "\u4E3B\u6570\u636E\u3001\u4E1A\u52A1\u4EA4\u6613\u3001\u62A5\u8868"],
            ["Elements", "\u5B9A\u5236\u9879"],
            ["Quick Access", "\u5FEB\u6377\u65B9\u5F0F"],
            ["Your Shortcuts", "\u5FEB\u6377\u65B9\u5F0F"],
            ["Settings", "\u8BBE\u7F6E"],
            ["Integrations", "\u5E94\u7528\u96C6\u6210"],
            ["My Workspaces", "\u6211\u7684\u5DE5\u4F5C\u533A"],
            ["MY WORKSPACES", "\u6211\u7684\u5DE5\u4F5C\u533A"],
            ["Documents", "\u5355\u636E"]
          ];
          $.each(trans_map, function(i, v) {
            $('div.ce-block__content span b:contains("' + v[0] + '")').html(v[1]);
          });
        }
      },
      500
    );
  });
})();
//# sourceMappingURL=erpnext_chinese.bundle.E47JCQ6Z.js.map
