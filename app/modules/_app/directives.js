'use strict';

angular
	.module('podiumAngularApp')
	.directive('lvrFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/_app/view-lvrFooter.html',
			transclude: true
		};
	})
	.directive('lvrHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/_app/view-lvrHeader.html',
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
			templateUrl: 'modules/_app/view-lvrSuppLinks.html',
			transclude: false
		};
	}]);
