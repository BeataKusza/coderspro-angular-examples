var myApp = angular.module('myApp', []);

myApp.controller('myAppController', ['$scope', function myAppController($scope) {
  $scope.names = ['Asia', 'Kasia', 'Zosia'];

  $scope.addName = function () {
    $scope.names.push($scope.imputName);
    $scope.imputName = '';
  }
  $scope.removeName = function(nameText) {
    var i =$scope.names.indexOf(nameText);
    $scope.scope.splice(i, 1);
  }
}]);
