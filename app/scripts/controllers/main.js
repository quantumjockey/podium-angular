'use strict';

/**
 * @ngdoc function
 * @name podiumAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the podiumAngularApp
 */
angular.module('podiumAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
