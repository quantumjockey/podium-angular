'use strict';

angular
	.module('topics')
	.directive('lvrTopic', function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/topics/lvrTopic/view.html',
			transclude: false
		};
	});
