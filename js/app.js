var myApp = angular.module("myApp", []);

myApp.controller("ButtonCtrl", function ButtonCtrl($scope) {
    $scope.name = "ENABLE";
    $scope.count = 120;
    $scope.enableIt = function() {

        if ($scope.name === "ENABLE") {
            $scope.name = "ENABLED";

            if($scope.count > 120) {
                $scope.count = $scope.count;
            } else {
                $scope.count += 1;
            }

            $scope.btnStyle = {
                "left": "130px",
                "color": "black",
                "background-color": "white"
            };
            $scope.sliderStyle = {
                "border": "6px solid #00bcd6",
                "background-color": "#00bcd6"
            };
            $scope.addonsStyle = {
                "background-color": "#00c6e2"
            };
            $scope.addonDesStyle = {
                "color": "#ffffff"
            };
            $scope.addonHeadStyle = {
                "color": "#ffffff"
            };
            $scope.checkMarkStyle = {
                "color": "#ffffff",
                "border": "1px solid #ffffff"
            };
        } else {
            $scope.name = "ENABLE";

            $scope.btnStyle = {
                "right": "130px",
                "color": "white",
                "background-color": "#00c6e2"
            };
            $scope.sliderStyle = {
                "border": "6px solid #f9fbfc",
                "background-color": "#f9fbfc"
            };
            $scope.addonsStyle = {
                "background-color": "#ffffff"
            };
            $scope.addonDesStyle = {
                "color": "#a4a4a4"
            };
            $scope.addonHeadStyle = {
                "color": "#2e313b"
            };
            $scope.checkMarkStyle = {
                "color": "#00c1ff",
                "border": "1px solid #00c1ff"
            };
        }
    };
});