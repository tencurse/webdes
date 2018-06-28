(function(window) {
  "use strict";

  function init() {
    [].slice.call(document.querySelectorAll(".sidenav")).forEach(function(nav) {
      var navItems = [].slice.call(nav.querySelectorAll(".nav_item")),
        itemsTotal = navItems.length,
        setCurrent = function(item) {
          // return if already current
          if (item.classList.contains("nav_item_cur")) {
            return false;
          }
          // remove current
          var currentItem = nav.querySelector(".nav_item_cur");
          currentItem.classList.remove("nav_item_cur");

          // set current
          item.classList.add("nav_item_cur");
        };

      navItems.forEach(function(item) {
        item.addEventListener("click", function() {
          setCurrent(item);
        });
      });
    });
  }
  init();

})(window);
