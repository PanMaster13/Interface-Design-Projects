var app = angular.module("productApp", []);

app.directive("product", function(){
    var directive = {};
    
    var linkFunction = function($scope, element, attributes){
        element.html("<div class='col-md-3'><h4>"+ $scope.product.model + "</h4><p><b>Price:</b> RM " + $scope.product.price + "<p></div>");
    }
    
    directive.restrict = "E";
    directive.link = linkFunction;
    directive.template = "<div class='col-md-3'><h4>{{ model }}</h4><p><b>Price:</b> RM {{ price }}<p></div>"
    
    directive.scope = {
        product : "=model"
    };
    
    return directive;
});

app.controller("productController", function($scope){
    $scope.model1 = {};
    $scope.model1.model = "Apple IPhone XS";
    $scope.model1.price = "4999";
    
    $scope.model2 = {};
    $scope.model2.model = "Samsung Galaxy S10 Plus";
    $scope.model2.price = "3499";
    
    $scope.model3 = {};
    $scope.model3.model = "Huawei MATE 20 Pro";
    $scope.model3.price = "2999";
    
    $scope.model4 = {};
    $scope.model4.model = "ONEPLUS 6T";
    $scope.model4.price = "1999";

});