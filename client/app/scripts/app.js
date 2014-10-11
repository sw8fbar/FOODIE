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
       .when('/%23/org/:orgId/facilities/:facilityId/articles/:articleId', {
                redirectTo: '/org/:orgId/facilities/:facilityId/articles/:articleId'
        })
       .when('/org/:orgId/facilities/:facilityId/articles/:articleId', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
      .otherwise({
        redirectTo: '/org/100/facilities/101/articles/102'
      });
  });
