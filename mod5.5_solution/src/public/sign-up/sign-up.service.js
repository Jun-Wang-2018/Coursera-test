(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  var signedUser = [];

  service.addUser = function (firstname,lastname,email,phone,favoritedish) {
    var newuser = {
      firstname: firstname,
      lastname:lastname,
      email:email,
      phone:phone,
      favoritedish:favoritedish
    };

    signedUser.push(newuser);
  };

  service.signedUser = function() {
    return signedUser;
  };

  service.getFavoriteItem = function (shorname) {
    if (shorname!=="") {
      return $http.get(ApiPath + '/menu_items/' + shorname + '.json')
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          return "error"
        });
    }

  };

}

})();
