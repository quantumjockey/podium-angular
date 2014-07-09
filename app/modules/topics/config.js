'use strict';

angular
	.module('topics')
	.config([ '$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/Topics',
			{
				controller: 'TopicsCtrl',
				templateUrl: 'modules/topics/view.html'
			})
	}]);
