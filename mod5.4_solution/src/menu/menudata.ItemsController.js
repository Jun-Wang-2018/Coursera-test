(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams','MenuDataService']
function ItemsController($stateParams, MenuDataService) {
  var itemDetail = this;
  var short_name = $stateParams.categoryShortName;

  var promise = MenuDataService.getItemsForCategory(short_name);

  promise.then(function (response) {
      itemDetail.itemsList = response.data.menu_items;
      // console.log(itemDetail.itemsList);
    })

  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
