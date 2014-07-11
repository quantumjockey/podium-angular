'use strict';

angular
	.module('podiumAngularApp')
	.factory('SuppLinksService', [ '$http', function ($http) {
    return $http.get('model/supp-links.json');
  }]);
