'use strict';

describe('Controller: TopicsCtrl', function () {

  // load the controller's module
  beforeEach(module('podiumAngularApp'));

  var TopicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopicsCtrl = $controller('TopicsCtrl', {
      $scope: scope
    });
  }));


  // it('should do stuff', function () {

  // });
});
