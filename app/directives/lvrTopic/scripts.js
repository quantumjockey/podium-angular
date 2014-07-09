'use strict';

angular
	.module('podiumAngularApp')
	.directive('lvrTopic', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/lvrTopic/view.html',
			transclude: false
		};
	});
