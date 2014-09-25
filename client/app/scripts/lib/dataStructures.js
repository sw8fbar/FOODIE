/**
 * Created by ajay on 9/18/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.factory("Node", function () {

        function Node(type, Obj, parent, cartService, userService) {
            this.type = type;
            this.parent = this;
            this.liked = false;
            if (parent != null)this.parent = parent;
            this.expandedInMenu = false;
            this.expandedInBody = false;
            this.class = '';
            this.children = [];
            this.hasSubGroups = false;
            this.data = Obj;
            this.cartService = cartService;
            this.userService = userService;
        };

        Node.prototype.expandInBody = function () {
            this.expandedInBody = true;
            this.class = " expanded";
        };

        Node.prototype.collapseInBody = function () {
            this.expandedInBody = false;
            this.class = '';
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].collapseInBody();
            }
        };

        Node.prototype.toggleExpand = function () {
            if (this.expandedInBody)
                this.collapseInBody();
            else
                this.expandInBody();
        };

        Node.prototype.toggleLike = function () {
            this.liked = !this.liked;
            if (this.parent != this) {
                this.parent.toggleLike();
            }
        };

        Node.prototype.addToCart = function (quantity) {
            this.cartService.addToCart(quantity, this);
        };

        Node.prototype.removeFromCart = function () {
            this.cartService.removeFromCart(this);
        };

        Node.prototype.updateCart = function (quantity) {
            if(quantity < 1)
                this.cartService.removeFromCart(this);
        };

        return( Node );
    });


    app.factory("CartItem", function () {

        function CartItem(quantity, node) {
            this.quantity = quantity;
            this.item = node;
        };

        return (CartItem);
    });


})();