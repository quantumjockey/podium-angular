'use strict';

angular
	.module('podiumAngularApp')
	.directive('lvrFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/_app/lvrFooter/view.html',
			transclude: true
		};
	})
	.directive('lvrHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/_app/lvrHeader/view.html',
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
			templateUrl: 'modules/_app/lvrSuppLinks/view.html',
			transclude: false
		};
	}]);
