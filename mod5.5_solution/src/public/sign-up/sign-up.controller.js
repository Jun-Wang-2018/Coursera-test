(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService', '$filter'];
function SignUpController(SignUpService, $filter) {
  var signUpCtrl = this;

  signUpCtrl.signedUser = SignUpService.signedUser();
  signUpCtrl.addUser = SignUpService.addUser();

  signUpCtrl.capitalize = function (text) {
    var capitalized_text = $filter('uppercase')(text);
    return capitalized_text;
  };

  // signUpCtrl.verify = function (inputtedname) {
  //   if (service.getFavoriteItem(signUpCtrl.capitalize(inputtedname))!=='error') {
  //     signUpCtrl.verifyresult = "Menu number is verified."
  //   } else {
  //     signUpCtrl.verifyresult = "No such menu number exists!"
  //   }
  // };

  signUpCtrl.submit = function () {
    signUpCtrl.completed = true;
  };
}

})();
