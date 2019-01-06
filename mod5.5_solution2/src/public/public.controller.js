(function () {
"use strict";

angular.module('public')
.controller('PublicController', PublicController);

PublicController.$inject = ['SignUpService'];
function MenuController(SignUpService) {
  var publicCtrl = this;
  publicCtrl.signedUser = SignUpService.signedUser();
  publicCtrl.addUser = SignUpService.addUser(firstname,lastname,email,phone,favoritedish);
}


})();
