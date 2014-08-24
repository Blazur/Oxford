Oxford
======

### A simple way to add beautiful custom C3/D3 charts to your angular apps. Charts based off [C3/D3](https://github.com/masayuki0812/c3).

## Dependencies
+ Angular.js (1.2+)

## Downloading
1. The best way to install Oxford is to use bower
    + ```bower install Oxford --save```
2. Or, from this repo
  + you'll need the main file ```oxford.js```

## Installing
1. Include ```oxford.js``` into your html.
2. Include the dependencies into your angular app,  ```oxford```
```javascript
angular.module('myApp', ['oxford'])
```

##Using
###Chart Directive

```html
<div>ng-controller="ChartController">
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
+If you want to change the type of chart to display add a type property to your data object like this...

```javascript
angular.module('chartApp', ['oxford'])
.controller('ChartController', function($scope){
  $scope.data = {
    columns: [
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ],
    type: 'spline'
  };
});
```










