"use strict";

// 1st method
var mainCtrl = function($scope, carFactory){
  $scope.controllerName = 'main controller test';
  $scope.car;
  $scope.message;

  $scope.selectCar = function(){
    if($scope.car !== undefined){
      $scope.message = carFactory.getMessage($scope.car);
    }
  };
};
app.controller('mainCtrl', ['$scope','carFactory' mainCtrl]);



var secondryCtrl = function($scope, carFactory){
  $scope.controllerName = 'secondry controller test';
  $scope.car;
  $scope.message;

  $scope.selectCar = function(){
    if($scope.car !== undefined){
      $scope.message = carFactory.getMessage($scope.car);
    }
  };
};
app.controller('secondryCtrl',['$scope','carFactory' secondryCtrl]);
// 2nd method
// app.controller('secondryCtrl', ['$scope', function($scope){
//
// }]);

//3rd method
// var mainCtrl = function($scope){
//
// };
// mainCtrl.$inject = ['$scope', '$http'];
// app.controller('mainCtrl', mainCtrl);
