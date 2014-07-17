'use strict';

angular
	.module('ngModule')
	.config(function () {

	})
	.directive('loadModule', [ '$document', function($document) {

		var stylesheetTemplate = 	{
				head: '<link rel="stylesheet" href="',
				tail: '" />'
			};

		var scriptsTemplate = {
				head: '<script src="modules/',
				tail: '.js"></script>'
			};

		var components = [
			'/config',
			'/controller',
			'/directives',
			'/services'
			];

		function CheckIfDocExists(address) {
			var http = new XMLHttpRequest();
			http.open('HEAD', address, false);
			http.send();
			if ( http.status === 404 ){
				return false;
			} else {
				return true;
			}
		}

		return {
			link: function(scope, element, attrs){



			},
			restrict: 'E',
			scope: {
				name: '@'
			},
			templateUrl: 'plugins/ng-module/view.html',
			transclude: false
		};
	}]);
