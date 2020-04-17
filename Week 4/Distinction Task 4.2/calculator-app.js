var app = angular.module("calculatorApp", []);
app.controller("calculatorCtrl", function ($scope){
    
    $scope.display = 0;
    $scope.answer = 0;
    
    
    $scope.displayChange = function($variable){
        
        if ($scope.display == 0){
            $scope.display = "";
        }
        $scope.display = $scope.display + $variable;
    }
    
    $scope.clear = function(){
        $scope.display = 0;
    }
    
    $scope.equal = function(){
        
        
    }
});