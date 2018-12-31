(function functionName() {
  'use strict';


  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    // .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: "NarrowItDownController as list",
      bindToController: true
    };
    return ddo;
  };


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;
    list.searchTerm = "";
    list.found = [];

    list.search = function() {
      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
      promise.then(function(matched) {
        list.found = matched;
      });
    };

    list.removeItem = function(itemIndex) {
      list.found.splice(itemIndex, 1);
    };
  };


  MenuSearchService.$inject = ['$http'];

  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        })
        .then(function(response) {
          var matched = [];
          var allitems = response.data.menu_items;
          if (searchTerm == "") {
            return matched;
          } else {
            for (var i in allitems) {
              if (allitems[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
                matched.push(allitems[i]);
              }
            };
            return matched;
          }
        })
    };
  };


})();
