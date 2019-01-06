(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['favoriteItem','ApiPath'];
function MyInfoController(favoriteItem, ApiPath) {
  var myinfo = this;

  myinfo.favoriteItem = favoriteItem;
  myinfo.basePath = ApiPath;

}

})();
