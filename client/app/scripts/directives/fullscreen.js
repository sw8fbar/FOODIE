/**
 * Created by ajay on 9/15/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('fullscreen', function () {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                background: '@'
            },
            template: '<div class="Overlay" style="background: {{background}}" ng-transclude=""></div>'
        };

    });

})();