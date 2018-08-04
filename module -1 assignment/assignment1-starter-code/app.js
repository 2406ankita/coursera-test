(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	
	LunchCheckController.$inject=['$scope'];
	
	function LunchCheckController($scope){
		$scope.dishes="";
		$scope.count="";
		
		$scope.countItems=function(){
			var items = $scope.dishes.split(",");
			var itemcount=items.length;
			var foods = 0;
			var i;
			for(i=0;i<itemcount;i++)
			{
				if(!((items[i]==="") || (items[i]===" "))){
					foods++;
					
				}
			}
			if($scope.dishes==="" || foods==0)
			{
				$scope.count="Please enter data first";	
			}
			else{
				if(foods>0 && foods<=3){
					$scope.count="Enjoy!";
				}
				else if(foods>3){
				$scope.count="Too much!";	
				}
			}
	}
	
	}
	
})();