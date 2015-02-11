var app = angular.module('TextSupport', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	})
	.when('/support', {
		templateUrl: 'support/support.html',
		controller: 'supportCtrl'
	})
	.otherwise('/')
});

