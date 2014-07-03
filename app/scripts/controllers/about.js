'use strict';

/**
 * @ngdoc function
 * @name podiumAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the podiumAngularApp
 */
angular.module('podiumAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
