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
      .otherwise({
        redirectTo: '/org/1/facilities/1/articles/1'
      });
  });
