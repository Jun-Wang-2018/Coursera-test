(function () {
'use strict';

angular.module('Data')
// .controller('MenuCategoriesController', MenuCategoriesController)
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });

      return response;
    // console.log(response);
    // return response;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };

  // // Returns a promise, NOT items array directly
  //   service.getItems = function () {
  //     var deferred = $q.defer();
  //
  //     // Wait 2 seconds before returning
  //     $timeout(function () {
  //       // deferred.reject(items);
  //       deferred.resolve(categoryList);
  //     }, 800);
  //
  //     return deferred.promise;
  //   };

}



})();
