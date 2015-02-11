var app = angular.module('TextSupport');

app.service('mainService', function($http, $firebase) {
	
	var sync = $firebase(new Firebase('https://textsupportyolo.firebaseio.com/numbers'))
	
	this.returnSync = function() {
		console.log(sync.$asArray());
		return sync.$asArray();
	};

	this.postText = function(msg) {
		return $http.post('http://localhost:9010/support/messages', {body: msg})
	};


});

