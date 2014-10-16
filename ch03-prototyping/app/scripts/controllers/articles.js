'use strict';

/**
 * @ngdoc function
 * @name ch03PrototypingApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the ch03PrototypingApp
 */
angular.module('ch03PrototypingApp')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
