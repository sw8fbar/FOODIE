/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {
    var app = angular.module('igapakApp');

    app.factory('OrgData', function ($http) {
        var urlBase = '/api/orgs';
        var OrgData = {};
        return {
            getOrgs: function () {
                return $http.get(urlBase);
            }
        }
    });

    app.factory('FacilityData', function ($http) {
        var urlBase = '/api/facilities';
        var FacilityData = {};
        return {
            getFacilities: function () {
                return $http.get(urlBase);
            }
        }
    });
})();