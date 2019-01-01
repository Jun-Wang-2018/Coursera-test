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
    // controller: "CategoriesController as categoriesctrl", // as categories
    // component: categories,
    resolve: {
      categoryList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getMenuCategories();
      }]
    }
  })

  .state('categories.items', {
    url: '/detail/{categoryShortName}',
    templateUrl: 'src/menu/templates/items.template.html',
    // controller: "ItemsController as itemsctrl", //as items
    // component: items,
    resolve: {
      itemList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItemsForCategory({categoryShortName});
      }]
    }
  });

}




})();
