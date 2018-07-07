"use strict";

// factory has no clues about the scope
var carFactory = function(){

  var carService ={};

  carService.getMessage = function(car){
    var message = 'No car selected';
    switch (car) {
      case 'G37':
        message = 'This car is infinity';
        break;
      case 'Jetta':
        message = 'This car is VW';
        break;
      case "Supra":
        message = 'Best Car Ever';
        break;
      default:
        message = 'Car Not Found on carFactory';
    }
    return getMessage;
  };
  return service;
};

app.factory('carFactory', carFactory);
