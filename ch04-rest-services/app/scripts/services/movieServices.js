'use strict';

/**
 * @ngdoc function
 * @name ch04RestServicesApp.controller:MovielistcontrollerCtrl
 * @description
 * # MovielistcontrollerCtrl
 * Controller of the ch04RestServicesApp
 */
angular.module('myApp.movieServices', [])
  .factory('rtmMovieFactory', function ($http, API_KEY) {

    var countries = [
      {name: 'USA', code: 'us'},
      {name: 'UK', code: 'uk'},
      {name: 'France', code: 'fr'}
    ];

    return {

      getCountries: function(){
        return countries;
      },

      getMovies: function(countryCode){
        //var key='';
        return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=10&country='+countryCode+'&callback=JSON_CALLBACK&apikey='+API_KEY);
      }
    };
  });
