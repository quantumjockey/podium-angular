'use strict';

angular
	.module('topics')
	.directive('lvrTopic', function() {
		return {
			restrict: 'E',
			templateUrl: 'directives/lvrTopic/view.html',
			transclude: false
		};
	});
