(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoryList']
function CategoriesController(categoryList) {
  var categoryDetail = this;
  categoryDetail.details1 = categoryList;
  // categoryDetail.id = item.id;
  // categoryDetail.name = item.name;
  // categoryDetail.short_name = item.short_name;
  // categoryDetail.special_instructions = item.special_instructions;
}

})();
