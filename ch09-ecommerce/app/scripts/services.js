'use strict';

angular.module('App')
    .factory('categoryServiceFactory', function () {

        return {
            getCategories: function () {
                var categories = ['Toys', 'Electronics', 'Books', 'Furniture', 'Collectibles'];
                return categories;
            }
        };

    })

    .factory('authServiceFactory', function ($q, Facebook) {

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
    .provider('AWSservice',
        function () {

            /**
             * The provider is a core type of recipe, and all other types such as factories and services are derived from the
             * provider. The provider allows us to create additional methods that can be used to configure it.
             */

            var region, S3bucketName, dynamoTableName, roleArn, dynamo, s3bucket;

            this.setRoleArn = function (arn) {
                roleArn = arn;
            };

            this.getRoleArn = function(){
                return roleArn;
            };

            this.setRegion = function (myRegion) {
                region = myRegion;

            };

            this.setS3Bucket = function (s3) {
                S3bucketName = s3;

            };

            this.setDynamoTableName = function (dynamo) {
                dynamoTableName = dynamo;

            };

            this.$get = function ($q, $log) {
                return {

                    initializeAWS: function(token) {
                        $log.debug('Initializing AWS(' + region + ') with token: ' + token);

                        var d = $q.defer();

                        var AWSCredentials = {
                            RoleArn: roleArn,
                            ProviderId: 'graph.facebook.com',
                            WebIdentityToken: token
                        };

                        AWS.config.credentials = new AWS.WebIdentityCredentials(AWSCredentials);
                        d.resolve(AWS.config.credentials);
                        AWS.config.region = region;

                        dynamo = new AWS.DynamoDB({
                            params: {
                                TableName: dynamoTableName
                            }
                        });

                        s3bucket = new AWS.S3({
                            params: {
                                Bucket: S3bucketName
                            }
                        });

                        return d.promise;

                    }
                };
            };
        })
;
