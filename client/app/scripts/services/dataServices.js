/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {
    angular.module('igapakApp').factory('Groups', function ($http) {
        return $http.get("/api/groups");
        //return [];

    });
})();