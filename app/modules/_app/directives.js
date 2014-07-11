'use strict';

angular
	.module('podiumAngularApp')
	.directive('lvrFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/lvrFooter/view.html',
			transclude: true
		};
	})
	.directive('lvrHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/lvrHeader/view.html',
			transclude: true
		};
	})
	.directive('lvrSuppLinks', [ 'SuppLinksService', function(SuppLinksService) {
		return {
			link: function(scope, element, attrs, ctrl){
				SuppLinksService.success(function(data){
					scope.linksList = data;
				});
			},
			restrict: 'E',
			scope: {
				title: '@'
			},
			templateUrl: 'directives/lvrSuppLinks/view.html',
			transclude: false
		};
	}]);
