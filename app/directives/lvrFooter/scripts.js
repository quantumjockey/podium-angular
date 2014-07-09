'use strict';

angular
	.module('podiumAngularApp')
	.directive('lvrFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/lvrFooter/view.html',
			transclude: true
		};
	});
