app.factory('FlightService', ['$http', function ($http) {

    var urlBase = 'app/json/locations.json';
    var FlightService = {};

    FlightService.getLocations = function(){
    	return $http.get(urlBase);
    };

    return FlightService;

}]);