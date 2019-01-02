(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getMenuCategories = function () {
    $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function(response) {
        service.alllitems =  response.data;
      });
      var result = service.alllitems;
        // console.log($scope.allitems);
    return result;
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
