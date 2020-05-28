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
            $scope.wind_array = [];
            
            angular.forEach($scope.array2, function(item){
                $scope.minTemp_array.push(item.Temperature.Minimum.Value);
                $scope.maxTemp_array.push(item.Temperature.Maximum.Value);
                $scope.thunderProb_array.push((item.Day.ThunderstormProbability + item.Night.ThunderstormProbability) / 2);
                $scope.rainProb_array.push((item.Day.RainProbability + item.Night.RainProbability) / 2);
                
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
                }]
            });
        },
        // Request Error
        function(response){
            $scope.requestText2 = "Failed to obtain data from Accuweather.com."
        }
    );
    
    // 24 Hour Historical Current Conditions
    // Incase Accuweather limit reached, use JSON backup data instead
    // URL: http://dataservice.accuweather.com/currentconditions/v1/230204/historical/24?apikey=M3S1eL8JAACFWTcvfkQjqkbds5Q7WBXk&language=en-us&details=true
    // Backup JSON: twentyfourHours_backup.json
    $http.get("twentyfourHours_backup.json")
    .then (
        // Request Success
        function(response){
            $scope.requestText3 = "";
            $scope.array3 = response.data;
            
            $scope.highestTemp_array = [];
            $scope.lowestTemp_array = [];
            $scope.windSpeed_array = [];
            $scope.weatherType_array = [];
            angular.forEach($scope.array3, function(item){
                $scope.highestTemp_array.push(item.TemperatureSummary.Past24HourRange.Maximum.Metric.Value);
                $scope.lowestTemp_array.push(item.TemperatureSummary.Past24HourRange.Minimum.Metric.Value);
                $scope.windSpeed_array.push(item.Wind.Speed.Metric.Value);
                $scope.weatherType_array.push(item.WeatherText);
            });
            Highcharts.chart("chart3", {
                chart: {
                    type: "line"
                },
                title: {
                    text: "24-Hour Historical of Current Conditions"
                },
                subtitle: {
                    text: "Source: https://developer.accuweather.com/"
                },
                xAxis: {
                    categories: ["1st hour","2nd hour","3rd hour","4th hour","5th hour","6th hour","7th hour","8th hour","9th hour","10th hour","11th hour","12th hour","13th hour","14th hour","15th hour","16th hour","17th hour","18th hour","19th hour","20th hour","21st hour","22nd hour","23rd hour","24th hour",]
                },
                yAxis: {
                    title: {
                        text: "Value (C, km/h)"
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
                    name: "Highest Temperature (C)",
                    data: $scope.highestTemp_array
                },{
                    name: "Lowest Temperature (C)",
                    data: $scope.lowestTemp_array
                },{
                    name: "Wind Speed (km/h)",
                    data: $scope.windSpeed_array
                }]
            });
        },
        // Request Error
        function(response){
            $scope.requestText3 = "Failed to obtain data from Accuweather.com.";
        }
    );
    
    // Additional Chart from Any Data From Accuweather API
});