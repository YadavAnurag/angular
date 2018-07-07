"use strict";

var formsController = function($scope){
  $scope.form = {
    carType : "",
    hasTurbo : true,
  };

  $scope.formDisabled = {
    name: '',
    disableName: false
  };

  $scope.formSubmit = {
    name : undefined,
    hasId : true,
    error: undefined,
    submitted: undefined
  };

  $scope.checkbox = {
    cb1 : true,
    cb2 : 'Y',
    cb3 : 'Going'
  };

  $scope.dropdownArray = [
    {value: 1, name: "This is one (array)"},
    {value: 2, name: "This is two (array)"},
    {value: 3, name: "This is three (array)"}
  ];


  $scope.validateForm = function(){
    $scope.formSubmit.error = undefined;

    if($scope.formSubmit.name && $scope.formSubmit.hasId){
      alert("Form has been submitted");
    }
    if(!$scope.formSubmit.hasId){
      $scope.formSubmit.error = "Do not have Id???";
    }
    if(!$scope.formSubmit.name){
      $scope.formSubmit.error = "Do not have Name???";
    }
  }
};


angular.module("formApp")
  .controller("formsController", ["$scope", formsController]);
