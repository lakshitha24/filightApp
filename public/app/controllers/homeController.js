app.controller('homeController', function($scope, FlightService) {
    $scope.fromDropdown = false;
    $scope.countDropdown=false;
    $scope.citys=[];
    $scope.datepickerOptions = {
        format: 'yyyy-mm-dd',
        language: 'fr',
        startDate: "2012-10-01",
        endDate: "2012-10-31",
        autoclose: true,
        weekStart: 0
    };
    $scope.$watch('countModel',function(newValue){
    	if(!newValue && newValue.length > 2)return;
    	 $scope.countDropdown=true;
    });
    $scope.addAdult=function(){
    	$scope.countModel ++;
    };
    $scope.removeAdults=function(){
    	if($scope.countModel == 0){
    		return;
    	}
    	else{
    	$scope.countModel --;
    }
    };
    $scope.AddChild=function(){
        $scope.countModel ++;
    };
    $scope.removeChild=function(){
    	 	if($scope.countModel == 0){
    		return;
    	}
    	else{
    	$scope.countModel --;
    }
	};



   
    $scope.$watch('fromLoc', function(newValue) {
        if (!newValue && newValue.length > 1) return;
        $scope.fromDropdown = true;
        FlightService.getLocations().success(function(data) {
        	var test =[];
                  test =data.Continents;
                  for(var l in test){
                  	console.log(test[l].Countries.Name);
                  }
		
            })
            .error(function(error) {
                // = 'Unable to load customer data: ' + error.message;
            });
    });
   


});