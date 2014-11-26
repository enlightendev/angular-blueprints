'use strict';

/**
 * @ngdoc function
 * @name ch03PrototypingApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the ch03PrototypingApp
 */
angular.module('ch03PrototypingApp')
    .controller('SubscribersCtrl', function ($scope,$http,$modal) {

        /**
         * The $http service will return a promise that contains two methods, namely success and error.
         */
        $http.get('http://localhost:9000/data/subscribers.json').success(function (data) {
            $scope.subscribers = data;
        });

        $scope.gridOptions = {
            data: 'subscribers',
            showGroupPanel: true,
            enableCellSelection: false,
            enableRowSelection: true,
            enableCellEdit: false,
            columnDefs: [
                {field:'no', displayName:'No.'},
                {field:'name', displayName:'Name'},
                {field:'userType', displayName:'Subscription Type'},
                {field:'loyalty', displayName:'Loyalty Score'},
                {field:'joinDate', displayName:'Date of Joining'}]
        };

        /**
         * $modal service will create its own scope within the parent scope.
         */
        $scope.showModal=function () {
            $scope.newUser={};
            var modalInstance = $modal.open(
                {
                    templateUrl: 'views/partials/add-user.html',
                    controller:'AddNewUserCtrl',
                    resolve: {
                        newUser: function () {
                            return $scope.newUser;
                        }
                    }
                });
        };

    })

    /**
     *
     */
    .controller('AddNewUserCtrl', function ($scope, $modalInstance, newUser) {

        $scope.newUser=newUser;

        $scope.saveNewUser=function(){
            $modalInstance.close(newUser);
        };

        $scope.cancel =function(){
            $modalInstance.dismiss('cancel');
        };
    });
