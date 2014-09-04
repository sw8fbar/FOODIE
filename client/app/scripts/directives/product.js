/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('product', function () {
        return {
            restrict: 'E',
            template: '<div class="product" id= "{{product.productId}}"><h4 class="menuHeading">{{product.productId}} - {{product.name[1].label}}</h4>'
                      +'<div class="itemDescription" class="pull-left">{{product.description[1].label}}</div>'
                      +'<div class="itemPrice" class="pull-right">{{product.price}}</div>'
                      +'</div>'

        };

    });

})();
