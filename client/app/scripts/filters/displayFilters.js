/**
 * Created by ajay on 9/25/14.
 */

'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.filter('matchLiked', function() {
        return function( nodes) {
            var filtered = [];
            angular.forEach(nodes, function(node) {
                if(node.liked) {
                    filtered.push(node);
                }
            });
            return filtered;
        };
    });

})();

