'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('igapakApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
       .when('/org/:orgId/facilities/:facilityId/articles/:articleId', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
      .when('/rio/restaurants/A1X62', {
            redirectTo: '/org/497/facilities/498/articles/499'
        })
      .otherwise({
        redirectTo: '/org/100/facilities/101/articles/102'
      });
  });
