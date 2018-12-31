(function functionName() {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
};

function FoundItemsDirectiveController() {
  var list = this;

  list.empty = function () {
    // console.log(list.items);
    if (list.items.length==0) {
      return true;
    }else{
      return false;
    }
  };

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.searchTerm = "";
  list.found = [];

  list.search = function () {
    if (list.found!==[]) {
      list.found.splice(0, list.found.length);
    }

    var promise = MenuSearchService.getMatchedMenuItems();
    promise.then(function (response) {
      var allitems = response.data.menu_items;
      // console.log(allitems.length);
      if (list.searchTerm=="") {
        list.found = [];
      } else {
        for (var i=0; i<allitems.length;i++){
          if (allitems[i].description.toLowerCase().indexOf(list.searchTerm) !== -1) {
            list.found.push(allitems[i]);
          }
        };
      }
       // console.log(list.found);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };
};


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });
    return response;
  };
};


})();
