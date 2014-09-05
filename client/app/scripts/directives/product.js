/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('product', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/product.html'
            /*template: '<div class="product" id= "{{product.productId}}">'
                       +'<div id="productId"> {{product.productId}} - {{product.name[1].label}}<div class="itemDescription">{{product.description[1].label}}</div></div>'
                       +'<div id="itemPrice">{{product.price}}</div>'
                       +'<div id="userOptions" class="pull-right"><img src="../../images/icons/arrow_down.png"></div>'
                      +'</div>' */

        };

    });

})();
