'use strict';

angular
	.module('meetings')
	.config([ '$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/Meetings',
			{
				controller: 'MeetingsCtrl',
				templateUrl: 'modules/meetings/view.html'
			})
	}]);
