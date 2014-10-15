'use strict';

/**
 * @ngdoc function
 * @name ch03PrototypingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ch03PrototypingApp
 */
angular.module('ch03PrototypingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
