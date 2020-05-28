var app = angular.module("weatherApp", []);

app.controller("weatherCTRL", function($scope, $http){
    
    // Card with Current Weather, Time, Data, Location
    
    // Acquire 12 Hours of Hourly Forecasts
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true&metric=true
    // Backup JSON: twelveHour_backup.json
    $http.get("twelveHour_backup.json")
    .then (
        // Request Success
        function(response){
            $scope.requestText1 = "";
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
                    categories: ["12 hours","24 hours","36 hours","48 hours","60 hours","72 hours","84 hours","96 hours","108 hours","120 hours","132 hours","144 hours"]
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
            $scope.requestText1 = "Failed to obtain data from Accuweather.com."
        }
    );
    
    // 5 Day Weather Forecast
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/forecasts/v1/daily/5day/230204?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true&metric=true
    // Backup JSON: fiveDayForecast_backup.json
    $http.get("fiveDayForecast_backup.json")
    .then (
        // Request Sucess
        function (response){
            $scope.requestText2 = "";
            // Points to Daily Forecasts part of the JSON data retrieved
            $scope.array2 = response.data.DailyForecasts;
            
            $scope.minTemp_array = [];
            $scope.maxTemp_array = [];
            $scope.thunderProb_array = [];
            $scope.rainProb_array = [];
            $scope.snowProb_array = [];
            $scope.wind_array = [];
            
            angular.forEach($scope.array2, function(item){
                $scope.minTemp_array.push(item.Temperature.Minimum.Value);
                $scope.maxTemp_array.push(item.Temperature.Maximum.Value);
                $scope.thunderProb_array.push((item.Day.ThunderstormProbability + item.Night.ThunderstormProbability) / 2);
                $scope.rainProb_array.push((item.Day.RainProbability + item.Night.RainProbability) / 2);
                $scope.snowProb_array.push((item.Day.SnowProbability + item.Night.SnowProbability) / 2);
                var avg_wind = ((item.Day.Wind.Speed.Value + item.Night.Wind.Speed.Value) / 2).toFixed(2);
                var wind = parseFloat(avg_wind);
                $scope.wind_array.push(wind);
            });
            Highcharts.chart("chart2",{
                chart: {
                    type: "line"
                },
                title: {
                    text: "5 Days of Forecasts"
                },
                subtitle: {
                    text: "Source: https://developer.accuweather.com/"
                },
                xAxis: {
                    categories: ["Day 1","Day 2","Day 3","Day 4","Day 5"]
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
                    name: "Min Temperature (C)",
                    data: $scope.minTemp_array
                },{
                    name: "Max Temperature (C)",
                    data: $scope.maxTemp_array
                },{
                    name: "Wind Speed (km/h)",
                    data: $scope.wind_array
                },{
                    name: "Thunderstorm Probability (%)",
                    data: $scope.thunderProb_array
                },{
                    name: "Rain Probability (%)",
                    data: $scope.rainProb_array
                },{
                    name: "Snow Probability (%)",
                    data: $scope.snowProb_array
                }]
            });
        },
        // Request Error
        function(response){
            $scope.requestText2 = "Failed to obtain data from Accuweather.com."
        }
    );
    
    // 24 Hour Historical Current Conditions
    
    // Additional Chart from Any Data From Accuweather API
});