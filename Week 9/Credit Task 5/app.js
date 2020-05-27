var app = angular.module("weatherApp", []);

app.controller("weatherCTRL", function($scope, $http){
    
    // Card with Current Weather, Time, Data, Location
    
    // Acquire 12 Hours of Hourly Forecasts 
    $http.get("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/230204?apikey=GnQDPMudtC2vptlhtBVHj2iVSTAoRJUr&language=en-us&details=true&metric=true")
    .then (
        // Request Success
        function(response){
            $scope.requestText = "";
            $scope.array1 = response.data;
            
            $scope.tempArray = [];
            $scope.wind = [];
            $scope.humidity = [];
            angular.forEach($scope.array1, function(item){
                $scope.tempArray.push(item.Temperature.Value);
                $scope.wind.push(item.Wind.Speed.Value);
                $scope.humidity.push(item.RelativeHumidity);
            });
            Highcharts.chart("chart1", {
                chart: {
                    type: "line"
                },
                title: {
                    text: "12 Hours of Hourly Forecasts"
                },
                subtitle: {
                    text: "Source: https://developer.accuweather.com/"
                },
                xAxis: {
                    categories: ["12 hours","24 hours","36 hours","48 hours","60 hours","72 hours","84 hours","96 hours","108 hours","120 hours","132 hours","144 hours",]
                },
                yAxis: {
                    title: {
                        text: "Value (C, km/h, %)"
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                series: [{
                    name: "Temperature (C)",
                    data: $scope.tempArray
                },{
                    name: "Wind (km/h)",
                    data: $scope.wind
                },{
                    name: "Relative Humidity (%)",
                    data: $scope.humidity
                }]
            });
        },
        // Request Error
        function(response){
            $scope.requestText = "Failed to obtain data from Accuweather.com."
        }
    )
    
    // 5 Day Weather Forecast
    
    // 24 Hour Historical Current Conditions
    
    // Additional Chart from Any Data From Accuweather API
});