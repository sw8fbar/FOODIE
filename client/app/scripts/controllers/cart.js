/**
 * Created by ajay on 9/18/14.
 */

angular.module('igapakApp').controller('CartCtrl', ['$scope', '$location', '$anchorScroll', '$window', 'Node', 'CartItem', 'CartService', function ($scope, $location, $anchorScroll, $window, Node, CartItem, CartService) {

    this.total = CartService.getTotal();
    this.cart = CartService.getCart();

    $scope.go = function ( path ) {
        $location.path( path );
    };

}]);