(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signUpCtrl = this;

  signUpCtrl.signedUser = SignUpService.signedUser();
  signUpCtrl.addUser = SignUpService.addUser();

  signUpCtrl.submit = function () {
    signUpCtrl.completed = true;
  };
}

})();
