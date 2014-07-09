'use strict';

angular
	.module('podiumAngularApp')
	.directive('lvrHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/lvrHeader/view.html',
			transclude: false
		};
	});
