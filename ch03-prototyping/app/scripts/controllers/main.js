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


        // Model for the 3 content blocks
        var baseURL='http://lorempixel.com/200/200/';

        $scope.content = [
            {
                img:baseURL+'people',
                title:'About Us',
                summary:'We are good, we are the best out there'
            },
            {
                img:baseURL+'business',
                title:'Our Services',
                summary:'We offer advice on staying Healthly, what to eat... what are the best exercises for you etc.'
            },
            {
                img:baseURL+'transport',
                title:'Contact Us',
                summary:'#111, Good Health Blvd, Happy Place, Antartica, Zip-432167'
            }
        ];


    });
