(function () {
"use strict";

angular.module('public')
.component('menuInfo', {
  templateUrl: 'src/public/menu-info/my-info.html',
  bindings: {
    favoriteItem: '<'
  }
});



})();
