(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.menuLengh = 0;
    $scope.message = "";
    $scope.fontColor = "";
    $scope.borderColor = "";

    $scope.checkMenu = function() {
      var menuLengh = $scope.lunchMenu.split(",").length;
      var itemArray = $scope.lunchMenu.split(",");
      // console.log(itemArray);
      for (var i=0; i<itemArray.length;i++){
        // console.log(itemArray[i]);
        if (itemArray[i].trim().length==0) {
          menuLengh -= 1;
        }
      }
      // console.log(menuLengh);
      if ($scope.lunchMenu == "") {
        $scope.borderColor = {'border-color':'red'};
        $scope.fontColor = {color:'green'};
        $scope.message = "Please enter data first!";
      } else if (menuLengh > 3) {
        $scope.borderColor = {'border-color':'green'};
        $scope.fontColor = {color:'red'};
        $scope.message = "Too much!";
      } else {
        $scope.borderColor = {'border-color':'green'};
        $scope.fontColor = {color:'green'};
        $scope.message = "Enjoy!";
      }
    }
  }


})();
