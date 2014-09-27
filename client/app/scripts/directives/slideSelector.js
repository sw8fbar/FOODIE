/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.directive('slideSelector', function () {
        return {
            restrict: 'E',
            scope: {items: '='},
            templateUrl: 'partials/slide-selector.html'

        };

    });

})();
