(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService']
function CategoriesController(MenuDataService) {
  var categoryDetail = this;
  var promise = MenuDataService.getMenuCategories();
  // var promise = categoryList;

  promise.then(function (response) {
    categoryDetail.categoryList = response.data;
    // console.log(categoryDetail.categoryList);
  })
  //
  // categoryDetail.id = item.id;
  // categoryDetail.name = item.name;
  // categoryDetail.short_name = item.short_name;
  // categoryDetail.special_instructions = item.special_instructions;
}
// console.log(CategoriesController.categoryList);
})();
