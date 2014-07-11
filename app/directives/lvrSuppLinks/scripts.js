'use strict';

angular
	.module('podiumAngularApp')
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
	}])
