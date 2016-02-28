var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            // controller: 'FavoritesController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
