'use strict';

angular.module('myApp.controllers', [])

  .controller('MainController', function($scope){

    $scope.name='MainController';

  })

  .controller('AboutController', function($scope){

    $scope.name='AboutController';

  })

  .controller('ContactController', function($scope){

    $scope.name='ContactController';

  });
