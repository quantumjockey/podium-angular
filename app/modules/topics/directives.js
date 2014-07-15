'use strict';

angular
	.module('topics')
	.directive('lvrTopic', function() {
		return {
			restrict: 'E',
			templateUrl: 'modules/topics/view-lvrTopic.html',
			transclude: false
		};
	});
