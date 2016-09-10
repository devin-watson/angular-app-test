var myApp = angular.module("myApp", []);

myApp.controller("ButtonCtrl", function ButtonCtrl($scope) {
  $scope.name ="ENABLE";
  
  $scope.enableIt = function(){

    if($scope.name === "ENABLE"){
      $scope.name = "ENABLED";

      document.getElementById('btn').style = 'left: 130px; -webkit-transition: 1s;transition: 1s; color: black; background-color: white;';
      document.getElementById('slider').style = '-webkit-transition: 1s;transition: 1s; background-color: #00bcd6; border: 6px solid #00bcd6;';
      document.getElementById('addons').style = '-webkit-transition: 1s;transition: 1s; background-color: #00c6e2;';
      document.getElementById('addon-description').style = '-webkit-transition: 1s;transition: 1s; color: #ffffff;';
      document.getElementById('addon-head').style = '-webkit-transition: 1s;transition: 1s; color: #ffffff;';
      document.getElementById('checkMark').style = '-webkit-transition: 1s;transition: 1s; color: #ffffff; border: 1px solid #fff;';
    } else {
      $scope.name = "ENABLE";
      document.getElementById('btn').style = 'right: 130px; -webkit-transition: 1s;transition: 1s; color: white; background-color: #00c6e2;';
      document.getElementById('slider').style = '-webkit-transition: 1s;transition: 1s; background-color: #f9fbfc; border: 6px solid #f9fbfc;';
      document.getElementById('addons').style = '-webkit-transition: 1s;transition: 1s; background-color: #ffffff';
      document.getElementById('addon-description').style = '-webkit-transition: 1s;transition: 1s; color: #a4a4a4';
      document.getElementById('addon-head').style = '-webkit-transition: 1s;transition: 1s; color: #2e313b';    
      document.getElementById('checkMark').style = '-webkit-transition: 1s;transition: 1s; color: #00c1ff; border: 1px solid #00c1ff;';
    }
  };
});

myApp.controller("CounterCtrl", function CounterCtrl($scope) {
  var incremented = false;
  $scope.count = 120;

  $scope.increment = function() {
    if (incremented) { 
      return; 
    }
    $scope.count++;
      
  };
});

