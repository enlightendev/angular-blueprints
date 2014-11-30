'use strict';

angular.module('App')
    .factory('categoryService', function () {

        return {
            getCategories: function () {
                var categories = ['Toys', 'Electronics', 'Books', 'Furniture', 'Collectibles'];
                return categories;
            }
        };

    })

    .factory('authService', function ($q, Facebook) {

        return {

            getUserInfo: function () {
                var d = $q.defer();
                Facebook.api('/me', function (response) {
                    d.resolve(response);
                });
                return d.promise;
            }
        };

    })
;
