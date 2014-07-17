'use strict';

angular
	.module('ezModule')
	.config(function () {

	})
	.directive('loadModule', [ '$document', function($document) {

		var basePath = 'modules';

		var components = [
			'config',
			'controller',
			'directives',
			'services'
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

				var styleSheetUrl = basePath + '/' + scope.name + '/styles.css';
				var scriptUrls = [];

				components.forEach(function(component){
					scriptUrls.push(basePath + '/' + scope.name + '/' + component + '.js');
				});

				if (checkIfDocExists(styleSheetUrl)){
					var markup = $document.createElement('link');
					markup.href = styleSheetUrl;
					markup.rel = 'stylesheet';
					$document.getElementsByTagName('head')[0].appendChild(markup);
				}

				scriptUrls.forEach(function(url){
					if (checkIfDocExists(styleSheetUrl)){
						var markup = $document.createElement('script');
						markup.src = url;
						$document.body.appendChild(markup);
					}
				});

			},
			restrict: 'E',
			scope: {
				name: '@'
			},
			templateUrl: 'plugins/ng-module/view.html',
			transclude: false
		};
	}]);
