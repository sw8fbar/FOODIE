'use strict';

(function () {

    angular.module('igapakApp')
        .directive('bannerFooter', function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/banner-footer.html'
            };

        });

})();