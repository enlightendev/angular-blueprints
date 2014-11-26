'use strict';

angular.module('myApp.directives', [])

  .directive('appVersion', ['version', '$log', function (version, $log) {
    return function (scope, element, attributes) {
      $log.info('scope: ' + scope + ' element: ' + element + ' attributes: ' + attributes);
      element.text(version);
    };
  }])

  .directive('myFacebook', ['$log', function ($log) {
    return {

      controller: function ($scope) {
        $scope.loadFriends = function () {

          FB.api('/me/friends', function (response) {
            $scope.$apply(function () {
              $scope.myFriends = response.data;
              console.log($scope.myFriends);
            });

          });
        };
      },

      link: function (scope, element, attributes) {
        $log.info('myFacebook directive link function --> scope: ' + scope + ' element: ' + element + ' attributes: ' + attributes);

        // Load the SDK asynchronously
        (function (d) {
          var js, id = 'facebook-jssdk',
            ref = d.getElementsByTagName('script')[0];
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement('script');
          js.id = id;
          js.async = true;
          js.src = '//connect.facebook.net/en_US/all.js';
          ref.parentNode.insertBefore(js, ref);
        }(document));

        // Initialize FB
        window.fbAsyncInit = function () {
          FB.init({
            appId: '1508364992769673',
            status: true, // check login status
            cookie: true, // enable cookies to access the session
            xfbml: false // parse XFBML
          });

          //Check FB Status

          FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
              FB.api('/me', function (response) {
                scope.$apply(function () {
                  scope.username = response.name;
                  scope.loadFriends();
                });
                console.log(scope.username);
              });
            } else {
              FB.login();
            }
          });

        };


        scope.username = 'John Doe';
      },

      template: 'Welcome {{username}}'
    };
  }])

/**
 * http://www.ng-newsletter.com/posts/directives.html
 */
  .directive('ngSparkline', function ($log) {

    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=7&callback=JSON_CALLBACK&q="

    return {
      restrict: 'A',
      require: '^ngCity',

      scope: {
        ngCity: '@'
      },

      template: '<div class="sparkline"><h4>Weather for {{ngCity}}</h4><div class="graph"></div></div>',

      controller: ['$scope', '$http', function ($scope, $http) {

        $scope.getTemp = function (city) {
          $http({
            method: 'JSONP',
            url: url + city
          }).success(function(data) {
            var weather = [];
            angular.forEach(data.list, function(value){
              weather.push(value);
            });
            $scope.weather = weather;
          });

        };

      }],

      link: function (scope, element, attributes, controller) {

        $log.info('ngSparkline directive link function --> scope: ' + scope + ' element: ' + element + ' attributes: ' + attributes + ' controller: ' + controller);

        scope.getTemp(attributes.ngCity);

        scope.$watch('weather', function(newVal) {
          // the `$watch` function will fire even if the
          // weather property is undefined, so we'll
          // check for it
          if (newVal) {
            var highs = [],
              width   = 200,
              height  = 80;

            angular.forEach(scope.weather, function(value){
              highs.push(value.temp.max);
            });
            // chart
          }
        });

      }
    };
  })

  .directive('ngCity', function() {
    return {
      controller: function($scope) {}
    }
  })

  .directive('scopeExample', function () {
    return {
      restrict: 'A',
      require: '^ngModel',

      scope: {
        ngModel: '=',     // Bind the ngModel to the object given
        onSend: '&',      // Pass a reference to the method
        fromName: '@'     // Store the string associated by fromName
      },

      template: '<div><h4>From name {{fromName}}</h4></div>',
      controller: function ($scope) {

        $scope.status = 'Not sent';

        $scope.sendMail = function (mail) {
          $scope.status = 'Sent' + mail;
        };
      }
    };
  });
