var app = angular.module('carShow',[]);
var URL="http://eacodingtest.digital.energyaustralia.com.au";

app.controller('mainController',function($scope,$http){
	
	$scope.getCarList = function(){
		var car = [];
		$scope.carList = [];
		$http.get(URL+"/api/v1/cars").
			then(function(response){
				var carDetails =  _.groupBy(_.flatten(_.pluck(_.each(response.data,function(ele)
						{_.each(ele.cars,function(e){e.name=ele.name})}), 'cars')), 'make');
				car.push(carDetails);
				$scope.carList = _.sortBy(car,'name');
				console.log($scope.carList)
			});
			
		
		
	}
});