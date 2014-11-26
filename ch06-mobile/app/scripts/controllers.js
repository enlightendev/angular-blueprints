'use strict';

angular.module('app.controllers', [])
  .controller('HomeCtrl', function () {

  })
  .controller('AddExpenseCtrl', function ($scope, categoryList, expenseService, $location) {

    $scope.categories = categoryList;

    $scope.submit = function () {
      expenseService.saveExpense($scope.expense);
      $location.path('/view-summary');
    };

  })

  .controller('ViewSummaryCtrl', function ($scope, categoryList, expenseService) {

    $scope.expenses = expenseService.getExpenses();

    $scope.summaryData = [];
    var categories=categoryList;

    categories.forEach(function(item) {
        var catTotal = expenseService.getCategoryTotal(item);

        $scope.summaryData.push({
          category: item,
          amount: catTotal
        });

      });

  });


