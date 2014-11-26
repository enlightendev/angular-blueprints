'use strict';

angular.module('app.services', [])

  .value('categoryList', ['Food', 'Fuel', 'Grocery', 'Entertainment'])

  .factory('expenseService', function (categoryList) {

    /**
     * Firstly, we are creating a prefix for all data that is being stored as a part of this app.
     * Remember that localStorage stores data as simple key-value pairs. These keys are unique to
     * each domain. To make sure that we are interacting with data belonging to only our app and
     * to also to make it easier while retrieving the data, we prefix all our keys with the exp-mgr prefix.
     * @type {string}
     */
    var prefix = 'exp-mgr';

    var exports = {};

    /**
     * this will be called when the Submit button of the form is hit. The saveExpense function takes in the data as an input parameter.
     * @param data
     */
    exports.saveExpense = function (data) {
      var timeStamp = Math.round(new Date().getTime());
      var key = prefix + timeStamp;

      /**
       * As localStorage can store the values only as strings, we need to convert our JSON data into a string.
       */
      data = JSON.stringify(data);

      /**
       * save to local storage
       */
      localStorage[key] = data;
    };

    exports.getExpenses = function () {

      var expenses = [];
      var prefixLength = prefix.length;

      /**
       * LocalStorage is that it doesn't have advanced methods to filter data or return a set of matching records.
       * We need to iterate through each item in localStorage and selectively pick up the ones that match our needs.
       */
      Object.keys(localStorage).forEach(function (key) {

        if (key.substring(0, prefixLength) === prefix) {
          var item = window.localStorage[key];

          /**
           * JSON.parse to convert our stringified data back into JSON format.
           */
          item = JSON.parse(item);

          expenses.push(item);
        }
      });

      return expenses;
    };

    exports.getCategoryTotal = function (category) {

      var categoryTotal = 0;
      var prefixLength = prefix.length;

      Object.keys(localStorage).forEach(function (key) {

        if (key.substring(0, prefixLength) === prefix) {
          var item = window.localStorage[key];

          /**
           * JSON.parse to convert our stringified data back into JSON format.
           */
          item = JSON.parse(item);

          if (item.category === category) {
            categoryTotal += parseFloat(item.amount); //need to use parseFloat to convert our numbers from string to a float value before we total them up.
          }
        }
      });

      return categoryTotal;
    };

    exports.getSummaryData = function () {

      var summaryData = [];
      var categories = categoryList;

      categories.forEach(function (item) {
        var catTotal = exports.getCategoryTotal(item);

        summaryData.push({
          category: item,
          amount: catTotal
        });

      });

      return summaryData;
    };

    return exports;
  });
