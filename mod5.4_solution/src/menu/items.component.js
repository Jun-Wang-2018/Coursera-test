(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menu/templates/items.template.html',
  // controller: ItemsController,
  // controllerAs: 'itemsctrl',
  bindings: {
    name: '<'
  }
});

// ItemsController.$inject = ['MenuDataService']
// function ItemsController(MenuDataService) {
//   var itemDetail = this;
//   itemDetail.details2 = itemList
//   // itemDetail.name = item.name;
//   // itemDetail.quantity = item.quantity;
//   // itemDetail.description = item.description;
// }

})();
