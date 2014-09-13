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
            getOrgs: function (orgID) {
                return $http.get(urlBase+'/'+orgID);
            }
        }
    });

    app.factory('FacilityData', function ($http) {
        var urlBase = '/api/facilities/' ;
        var FacilityData = {};
        return {
            getFacilities: function (facilityId,articleId) {
                return $http.get(urlBase+facilityId+'/articles/'+articleId);
            }
        }
    });
})();