## scopes

- Every AngularJS app will have a root scope created at the ng-app directive. 
- Many other directives could also create their own scope. 
- Scopes are arranged in a hierarchical fashion following the DOM structure of the page. 
- Child Scopes prototypically inherit from their parent scope. 
    `The exception to this is in cases where a directive uses a scope option, it creates an isolated scope.`

## 2 way data binding
Form

    <div class="wrapper">
        <h2>Add a Contact</h2>
        Name: <input type="text" ng-model="newPerson.name"></input>  <!-- ng-model directive binds newPerson as object in scope.
        Phone: <input type="text" ng-model="newPerson.phone"></input>
        City: <input type="text" ng-model="newPerson.city"></input>
        <button ng-click="save()">Save</button>
    </div>
    
Controller    
    
    $scope.save = function(){
        $scope.people.push({
           name: $scope.newPerson.name,
           phone: $scope.newPerson.phone,
           city: $scope.newPerson.city
        });
    }
    
    