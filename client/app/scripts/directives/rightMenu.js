/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.directive('rightMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/right-menu.html'

        };

    });

})();
