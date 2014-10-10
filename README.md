## scopes

- Every AngularJS app will have a root scope created at the ng-app directive. 
- Many other directives could also create their own scope. 
- Scopes are arranged in a hierarchical fashion following the DOM structure of the page. 
- Child Scopes prototypically inherit from their parent scope. `The exception to this is in cases where a directive uses a scope option, it creates an isolated scope.`

