'use strict';

/**
 * @ngdoc function
 * @name ch03PrototypingApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the ch03PrototypingApp
 */
angular.module('ch03PrototypingApp')
    .controller('SubscribersCtrl', function ($scope,$http) {

        /**
         * The $http service will return a promise that contains two methods, namely success and error.
         */
        $http.get('http://localhost:9000/data/subscribers.json').success(function (data) {
            $scope.subscribers = data;
        });

        $scope.gridOptions = {
            data: 'subscribers',
            columnDefs: [
                {field:'no', displayName:'No.'},
                {field:'name', displayName:'Name'},
                {field:'loyalty', displayName:'Loyalty Score'},
                {field:'joinDate', displayName:'Date of Joining'}]
        };

    });
