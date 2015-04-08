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
      'menuContent': {
        templateUrl: "templates/fillout.html",
        controller: 'FilloutController'
      }
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



app.controller("FilloutController", function($scope, $http) {
  $scope.token = "f5d56dc7";
  $scope.pendingQuestionnaires = [];
  $scope.url = "https://demo.roqua.nl/?token=" + $scope.token;

  $scope.refresh = function() {
    $http.post("https://demo.roqua.nl/client/session.json?token=" + $scope.token).then(function(response) {
      console.log("Response: ", response.data.questionnaires);
      $scope.pendingQuestionnaires = response.data.questionnaires;
    }, function(error) {
      console.log("HTTP Error", error)
    });
  }



    // {key: 'oq45', name: 'OQ-45'},
    // {key: 'cqi', name: 'Klanttevredenheidslijst'},
    // {key: 'sbgmds', name: 'SBG-MDS'}
});


