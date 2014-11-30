'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
    .module('App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'facebook'
    ])
    .config(function ($stateProvider, FacebookProvider) {

        $stateProvider.state('add', {
            url: '/add',
            templateUrl: 'views/partials/add-products.html',
            controller: 'AddProductsController'
        });

        $stateProvider.state('category', {
            url: '/:category',
            templateUrl: 'views/products.html',
            controller: 'ProductsController'
        });

        /**
         * The next state is a nested view where we define the product state as a subset of the category, using the dot
         * notation. The URL is a variable called ID, which would essentially be the product ID. We again make use of
         * the dot notation to define the partial for the products.details.html view.
         *
         * We use the dot notation to define the parent and child state views. In our case, the product is the parent
         * to the details view.
         */
        $stateProvider.state('category.products', {
            url: '/:id',
            templateUrl: 'views/partials/products.details.html',
            controller: 'ProductDetailsController'
        });

        FacebookProvider.init('1508364992769673');

    });
