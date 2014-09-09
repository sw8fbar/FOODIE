/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('product', function () {
        return {
            restrict: 'E',
//            templateUrl: 'partials/product_to_delete.html'
            templateUrl: 'partials/product-table.html'

        };

    });

})();
