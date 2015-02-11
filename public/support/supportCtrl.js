var app = angular.module('TextSupport');

app.controller('supportCtrl', function($scope, mainService) {
	$scope.test = "hello support";

	$scope.numbers = mainService.returnSync();

	$scope.bindText = function() {
		$scope.numbers.$add({body: $scope.inputText});
		mainService.postText($scope.inputText);
		$scope.inputText = '';
	};

});