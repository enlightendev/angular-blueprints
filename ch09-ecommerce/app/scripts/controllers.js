'use strict';

/**
 * @ngdoc function
 * @name App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the App
 */
angular.module('App')

    /**
     * this controller is our root scope: <body ng-app="App" ng-controller="AppController">
     */
    .controller('AppController', function ($scope, categoryServiceFactory, Facebook, authServiceFactory, $log, AWSservice) {

        $scope.categories = categoryServiceFactory.getCategories();
        $scope.user = {};
        $scope.shoppingBasket = [ ];

        Facebook.getLoginStatus(function(response) {

            if (response.status === 'connected') {
                authServiceFactory.getUserInfo().then(function(data) {
                    $scope.user = data;
                });
            } else {
                Facebook.login(function(response){

                    if (response.authResponse) {

                        authServiceFactory.getUserInfo().then(function(data) {
                            $scope.user = data;
                        });

                        //Initialize AWS
                        var token = response.authResponse.accessToken;

                        //Token, Login Status can be grabbed from response.authResponse
                        $log.info('User logged in: token = ' + token);

                        AWSservice.initializeAWS(token).then(
                            function(data) {
                                $log.info('Initialized AWS with above token: data = ');
                                $log.info(data);
                            });

                    } else {

                        console.log('User cancelled login or did not fully authorize.');

                    }
                });
            };

        });

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
            title: 'Video Game',
            price: 2,
            userName: 'John Doe'
        }, {
            productId: '456',
            title: 'Laptop',
            price: 12,
            userName: 'Sandy Peters'
        }];


    })

    .controller('ProductDetailsController', function ($scope, $stateParams) {

        $scope.id = $stateParams.id;

        $scope.product = {
            'title': 'Laptop',
            'description': 'lorem lipsum do re me.',
            'price': 12,
            'userName': 'Sandy Peters'

        };
    });
