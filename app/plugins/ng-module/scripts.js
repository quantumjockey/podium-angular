'use strict';

angular
	.module('ngModule')
	.config(function () {

	})
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
