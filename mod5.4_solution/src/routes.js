(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/main-categories.template.html',
    controller: "CategoriesController as categoriesctrl"
    // resolve: {
    //   categoryList: ['MenuDataService', function (MenuDataService) {
    //     return MenuDataService.getMenuCategories();
    //   }]
    // }
  })

  .state('items', {
    url: '/detail/{categoryShortName}',
    templateUrl: 'src/menu/templates/main-items.template.html',
    controller: "ItemsController as itemsctrl",
    // data: {
    //   categoryName: {categoryShortName}
    // }
    // resolve: {
    //   itemList: ['MenuDataService', function (MenuDataService) {
    //     return MenuDataService.getItemsForCategory({categoryShortName});
    //   }]
    // }
  });
}


})();
