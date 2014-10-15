'use strict';

/**
 * @ngdoc function
 * @name ch03PrototypingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ch03PrototypingApp
 */
angular.module('ch03PrototypingApp')
    .controller('MainCtrl', function ($scope) {

        var baseURL = 'http://lorempixel.com/960/450/';

        //used to set the autoslider of the carousel to 5 seconds.
        $scope.setInterval = 5000;

        //slides model
        $scope.slides = [
            {
                title: '7 Ways to stay Fit',
                image: baseURL + 'sports/',
                text: 'Play a sport for 30 minutes a day!'
            },
            {
                title: 'Healthly Food',
                image: baseURL + 'food/',
                text: 'Food that you should be eating!'
            },
            {
                title: 'Relaxing Holidays',
                image: baseURL + 'nature/',
                text: '10 Locations for Nature Lovers!'
            }

        ];

    });
