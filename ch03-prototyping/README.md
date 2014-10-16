## Yeoman

### adding a new view

    yo angular:route articles
    
This will add:

- update app.js with new route
    
    .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
    })
      
- html view page

    <p>This is the articles view.</p>
    
- create a new controller with a dummy model.
    
- update index with reference to controller js file

    <script src="scripts/controllers/articles.js"></script>
        
- create a test for the controller

### yeoman help
    
    yo -help
        
        
### routes

- Routes essentially tell AngularJS what controller and view to use for the given browser URL; routes are stored in 
    the app/scripts/app.js file.
- Routes make use of $routeProvider, and each route has two parameters: the first parameter is the path and the second is an object parameter.
