var app = angular.module("myApp", ['ngRoute']);
app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/archer', {
      templateUrl: '../partials/archer.html',
      controller: 'CartController'
    })
    .when('/bojack', {
      templateUrl: '../partials/bojack.html',
      controller: 'MainController'
    })
    .when('/randm', {
      templateUrl: '../partials/randm.html',
      controller: 'MainController'
    })
    .when('/vbros', {
      templateUrl: '../partials/vbros.html',
      controller: 'MainController'
    })
});
