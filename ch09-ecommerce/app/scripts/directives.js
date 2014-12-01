'use strict';

angular.module('App')
    .directive('facebookCheck', function (Facebook, authServiceFactory, $log, AWSservice) {

        return {
            link: function (scope, elements, attrs) {

                scope.login = function () {

                    Facebook.login(function (response) {

                    });
                };

                scope.logout = function () {
                    Facebook.logout();
                };
            },

            templateUrl: 'views/directives/facebook-check.html'
        };
    }
);
