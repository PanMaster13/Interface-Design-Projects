var app = angular.module("weatherApp", []);

app.controller("weatherCTRL", function($scope, $http){
    
    // Acquire 12 Hours of Hourly Forecasts 
    $http.get("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/230204?apikey=GnQDPMudtC2vptlhtBVHj2iVSTAoRJUr&language=en-us&details=true&metric=true")
    .then (
        function(response){
            $scope.array1 = response.data;
            
            $scope.phraseArray = [];
            $scope.tempArray = [];
            $scope.wind = [];
            $scope.humidity = [];
            $scope.test = "pog";
            angular.forEach($scope.array1, function(item){
                $scope.phraseArray.push(item.IconPhrase);
                $scope.tempArray.push(item.Temperature.Value);
                $scope.wind.push(item.Wind.Speed.Value);
                $scope.humidity.push(item.RelativeHumidity);
            });
            Highcharts.chart("chart1", {
                chart: {
                    type: "line"
                },
                title: {
                    text: "Pepega title"
                },
                subtitle: {
                    text: "Your mum"
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10","Day 11","Day 12",]
                },
                yAxis: {
                    title: {
                        text: "Value"
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
                tooltip: {
                    headerFormat: "<span style='font-size:11px'>{series.name}</span><br/>"
                },
                series: [{
                    name: "Temperature (C)",
                    data: $scope.tempArray
                },{
                    name: "Wind (km/h)",
                    data: $scope.wind
                },{
                    name: "Relative Humidity (RH)",
                    data: $scope.humidity
                }]
            });
            $scope.test = "pepega";
        }
    )
});