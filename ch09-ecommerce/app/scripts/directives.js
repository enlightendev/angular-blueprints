'use strict';

angular.module('App')
    .directive('facebookCheck', ['Facebook',
        function (Facebook) {

            return {
                link: function (scope, elements, attrs) {

                    scope.login = function () {
                        Facebook.login();
                    };

                    scope.logout = function () {
                        Facebook.logout();
                    };
                },

                templateUrl: 'views/directives/facebook-check.html'
            };
        }
    ]);
