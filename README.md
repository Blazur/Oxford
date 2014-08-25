Oxford
======

### A simple way to add beautiful custom C3/D3 charts to your angular apps. Charts based off [C3](https://github.com/masayuki0812/c3).

## Dependencies
+ Angular.js (1.2+)

## Downloading
1. The best way to install Oxford is to use bower
    + ```bower install Oxford --save```
2. Or, from this repo
  + you'll need the main file ```oxford.js```

## Installing
1. Include ```c3.min.js``` ```d3.min.js``` ```oxford.js``` into your html in that order.
2. Include the dependencies into your angular app,  ```oxford```
```javascript
angular.module('myApp', ['oxford'])
```

##Using
###Chart Directive

```html
<div ng-controller="ChartController">
  <chart data="data"></chart>
</div>
```

```javascript
angular.module('chartApp', ['oxford'])
.controller('ChartController', function($scope){
  $scope.data = {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ]
  };
});
```
If you want to change the type of chart to display add a type property to your data object like this...

```javascript
angular.module('chartApp', ['oxford'])
.controller('ChartController', function($scope){
  $scope.data = {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'spline'
  };
});
```

##Contributing
1. Fork it
2. Clone your fork
3. Create new branch
4. Make changes
5. Make test and check test
6. Build it, run ```gulp``` and the files will be linted, concatenated, and minified
7. Push to new branch on your forked repo
8. Pull request from your branch to Oxford master

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on github as well as in various git tools.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

###Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes"
The body should include the motivation for the change and contrast this with previous behavior.

###Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.









