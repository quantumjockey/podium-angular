'use strict';

describe('Controller: LeaderboardCtrl', function () {

  // load the controller's module
  beforeEach(module('podiumAngularApp'));

  var LeaderboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeaderboardCtrl = $controller('LeaderboardCtrl', {
      $scope: scope
    });
  }));


  // it('should do stuff', function () {

  // });
});
