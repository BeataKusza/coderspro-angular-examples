var myApp = angular.module('myApp', []);

myApp.controller('myAppController', ['$scope', function myAppController($scope) {
  $scope.name = 'Kuba';

  $scope.$watch('surname', function (newVal, oldVal) {
    console.log('New value is ' + newVal);
  });

  setTimeOut(function () {
    $scope.surname = 'Matyka';
    $scope.greetings = 'Hello!';
    $scope.$apply();
  }, 1000)

}]);
