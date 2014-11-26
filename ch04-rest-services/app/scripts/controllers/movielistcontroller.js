'use strict';

/**
 * @ngdoc function
 * @name ch04RestServicesApp.controller:MovielistcontrollerCtrl
 * @description
 * # MovielistcontrollerCtrl
 * Controller of the ch04RestServicesApp
 */
angular.module('myApp.controllers', [])
  .controller('MovieListController', function ($scope, rtmMovieFactory, $log) {

    $scope.countries = rtmMovieFactory.getCountries();

    $scope.loadMovies = function (countryCode) {

      rtmMovieFactory.getMovies(countryCode).then(
        function (response) {

          var movieArray = response.data.movies;
          $scope.movies = movieArray;

        }, function (response) {
          $log.debug(response);
        });
    };

    $scope.loadMovies('us');

  });
