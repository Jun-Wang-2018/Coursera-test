(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menu/templates/items.template.html',
  controller: ItemsController,
  controllerAs: 'itemsctrl',
  bindings: {
    itemList: '<'
  }
});

ItemsController.$inject = ['MenuDataService', 'itemList']
function ItemsController(MenuDataService, itemList) {
  var itemDetail = this;
  itemDetail.details2 = itemList
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
