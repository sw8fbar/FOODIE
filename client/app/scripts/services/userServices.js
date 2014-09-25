/**
 * Created by ajay on 9/25/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.service('UserService', ['$http','Node', function ($http, Node) {
        var liked = new HashMap();

        var getLiked = function(user) {
            //get information from server once we are storing user information
            return liked;
        }

        return {
            getLiked: getLiked
        };
    }]);

})();