var app = angular.module("unitsApp", []);

app.controller("unitsCTRL", function($scope, $http){
    
    // Retrieves data from 'moredata.json' file to display in table
    $http.get("moredata.json")
    .then (
        function(response){
            $scope.objArray = response.data;
        },
        function(response){
            // Nothing
        }
    );
});