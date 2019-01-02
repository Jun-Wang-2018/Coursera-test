(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menu/templates/categories.template.html',
  // controller: CategoriesController,
  // controllerAs: 'categoriesctrl',
  // bindings: {
    // categoryList: '<'
  // }
});
// console.log(categoryList);
// CategoriesController.$inject = ['MenuDataService', 'categoryList']
// function CategoriesController(MenuDataService, categoryList) {
//   var categoryDetail = this;
//   categoryDetail.details1 = categoryList;
//   // categoryDetail.id = item.id;
//   // categoryDetail.name = item.name;
//   // categoryDetail.short_name = item.short_name;
//   // categoryDetail.special_instructions = item.special_instructions;
// }

})();
