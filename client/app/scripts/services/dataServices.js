/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {
    var app = angular.module('igapakApp');

    var OrgData = null;
    var FacilityData = null;
    var YelpData = null;

    app.factory('OrgData', ['$http','$log',function ($http, $log) {
        var urlBase = '/api/orgs';

        return {
            getOrgs: function (orgID) {

                if (OrgData == null) {
                    $log.info("called Async ORG service");
                    OrgData = $http.get(urlBase + '/' + orgID);
                }
                return OrgData;
            }
        }
    }]);

    app.factory('FacilityData', ['$http','$log',function ($http, $log) {
        var urlBase = '/api/facilities/' ;

        return {
            getFacilities: function (facilityId,articleId) {
                if (FacilityData == null) {
                    $log.info("called Async Facility service");
                    FacilityData = $http.get(urlBase + facilityId + '/articles/' + articleId);
                }
                return FacilityData;
            }
        }
    }]);

    app.factory('YelpData', ['$http','$log',function ($http, $log) {
        var urlBase = 'api/yelpbusiness/' ;

        return {
            getYelpData: function (yelpBusinessId) {

                if (YelpData == null) {
                    $log.info("called Async Yelp service");
                    YelpData = $http.get(urlBase + yelpBusinessId);
                }
                return YelpData;
            }
        }
    }]);
})();