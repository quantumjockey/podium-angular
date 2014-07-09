'use strict';

angular
	.module('leaderboard')
	.config([ '$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/Leaderboard',
			{
				controller: 'LeaderboardCtrl',
				templateUrl: 'modules/leaderboard/view.html'
			})
	}]);
