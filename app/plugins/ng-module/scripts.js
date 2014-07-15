'use strict';

angular
	.module('ngModule')
	.directive('module', function() {
		return {
			restrict: 'E',
			scope: {
				name: '@'
			},
			templateUrl: 'plugins/ng-module/view.html',
			transclude: false
		};
	});
