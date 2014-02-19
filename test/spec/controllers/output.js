'use strict';

describe('Controller: OutputCtrl', function () {

  // load the controller's module
  beforeEach(module('verbalregexApp'));

  var OutputCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OutputCtrl = $controller('OutputCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
