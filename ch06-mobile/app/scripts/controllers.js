angular.module('app.controllers',[])
  .controller('HomeCtrl',function(){

  })
  .controller('AddExpenseCtrl',function($scope, categoryList){

    $scope.categories = categoryList;

  })

  .controller('ViewSummaryCtrl',function(){

  });


