'use strict';

(function () {

    angular.module('igapakApp')
        .directive('navigationBar', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/navigation-bar.html'
            };

        });

})();