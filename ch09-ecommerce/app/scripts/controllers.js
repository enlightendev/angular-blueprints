'use strict';

/**
 * @ngdoc function
 * @name App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the App
 */
angular.module('App')

    .controller('AppController', function ($scope, categoryService) {

        $scope.categories = categoryService.getCategories();
        $scope.user = {};
        $scope.shoppingBasket = [ ];

    })

    .controller('AddProductsController', function ($scope) {
        $scope.data = {
            fname: 'juan'
        };
    })

    .controller('ProductsController', function ($scope, $stateParams) {
        $scope.category = $stateParams.category;

        $scope.productsListing = [{
            productId: '123',
            title: ' Baby Rattles',
            price: 2,
            userName: 'John Doe'
        }, {
            productId: '456',
            title: ' Kiddy Laptop',
            price: 12,
            userName: 'Sandy Peters'
        }];


    })

    .controller('ProductDetailsController', function ($scope, $stateParams) {

        $scope.id = $stateParams.id;

        $scope.product = {
            'title': 'Kiddy Laptop',
            'description': 'lorem lipsum do re me.',
            'price': 12,
            'userName': 'Sandy Peters'

        };
    });
