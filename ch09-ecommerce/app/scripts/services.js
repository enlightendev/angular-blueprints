'use strict';

angular.module('App')
    .factory('categoryService', function () {

        return {
            getCategories: function () {
                var categories = ['Toys', 'Electronics', 'Books', 'Furniture', 'Collectibles'];
                return categories;
            }
        };

    });
