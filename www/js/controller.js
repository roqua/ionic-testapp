var app = angular.module('todo', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: "templates/main.html"
  });

  $stateProvider.state('app.fillout', {
    url: '/fillout',
    views: {
      'menuContent': {templateUrl: "templates/fillout.html"}
    }
  });

  $stateProvider.state('app.outcome', {
    url: '/outcome',
    views: {
      'menuContent': {templateUrl: "templates/outcome.html"}
    }
  });

  $stateProvider.state('app.epd', {
    url: '/epd',
    views: {
      'menuContent': {templateUrl: "templates/epd.html"}
    }
  });


  $urlRouterProvider.otherwise('/app/fillout')
});



app.controller("LoginCtrl", function($scope) {
  $scope.saveToken = function() {
  };
});


