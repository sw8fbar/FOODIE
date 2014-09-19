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
        .when('/cart',{
            templateUrl: 'views/cart.html',
            controller: 'CartCtrl'
        })
      .otherwise({
        redirectTo: '/org/1/facilities/1/articles/2'
      });
  });
