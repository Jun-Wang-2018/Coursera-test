(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService', '$filter'];
function SignUpController(SignUpService, $filter) {
  var signUpCtrl = this;

  // signUpCtrl.signedUser = SignUpService.signedUser();
  // signUpCtrl.addUser = SignUpService.addUser();

  signUpCtrl.capitalize = function (text) {
    var capitalized_text = $filter('uppercase')(text);
    return capitalized_text;
  };

  signUpCtrl.submit = function () {
    signUpCtrl.completed = true;
  };
}

})();
