'use strict';

angular.module('leaderboard', []);
angular.module('meetings', []);
angular.module('topics', []);

/**
 * @ngdoc overview
 * @name podiumAngularApp
 * @description
 * # podiumAngularApp
 *
 * Main module of the application.
 */
angular
  .module('podiumAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'leaderboard',
    'meetings',
    'topics'
  ])
  .config(function ($routeProvider) {

  });
