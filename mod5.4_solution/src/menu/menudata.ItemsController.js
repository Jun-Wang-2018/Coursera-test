(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams','MenuDataService']
function ItemsController($stateParams, MenuDataService) {
  var itemDetail = this;
  var short_name = $stateParams.categoryShortName;
  // var name = $stateParams.categoryName;

  var promise = MenuDataService.getItemsForCategory(short_name);

  promise.then(function (response) {
      itemDetail.itemsList = response.data.menu_items;
      // console.log(itemDetail.itemsList);
    })

  itemDetail.categoryShortName = short_name;
  // itemDetail.categoryName = name;
  // console.log(short_name)
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
