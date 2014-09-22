/**
 * Created by ajay on 9/18/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.service('CartService', ['$http','Node', 'CartItem', function ($http, Node, CartItem) {
        var cart = new HashMap();
        var count = 0;

        var addToCart = function(quantity, nodeObj) {
            if (cart.has(nodeObj.data.igapakId)) {
                var cartItem = cart.get(nodeObj.data.igapakId);
                cartItem.quantity = quantity;
            } else {
                cart.set(nodeObj.data.igapakId, new CartItem(quantity, nodeObj));
            }
            count = cart.count();

            //alert('count - '+count + "    Total - "+ total);
        }

        var removeFromCart = function(nodeObj){
            var item = cart.get(nodeObj.data.igapakId);

            cart.remove(nodeObj.data.igapakId);
            count = cart.count();

            //alert('count - '+count + "    Total - "+ total);
        }

        var getCart = function() {
            return cart;
        }

        var getTotal = function() {
            var total = 0;
            cart.forEach(function(value, key){
                total += value.quantity*value.item.data.price;
            })
            return total;
        }

        var getCount = function() {
            return count;
        }

        return {
            addToCart: addToCart,
            getCart: getCart,
            removeFromCart: removeFromCart,
            getTotal: getTotal,
            getCount: getCount
        };
    }]);

})();