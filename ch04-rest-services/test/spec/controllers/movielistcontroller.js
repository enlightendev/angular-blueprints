'use strict';

describe('Controller: MovielistcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('ch04RestServicesApp'));

  var MovielistcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovielistcontrollerCtrl = $controller('MovielistcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
