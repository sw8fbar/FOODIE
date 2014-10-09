/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.directive('slideSelector', function ($timeout) {
        return {
            restrict: 'E',
            scope: {
                items: '=',
                onNodeClick: '&',
                currentIndex: '@'
            },
            templateUrl: 'partials/slide-selector.html',
            link: function(scope, element, attribute) {
                $timeout(function(){
                    for (var i = 0; i < scope.items.length; i++) {
                        scope.items[i].index = i;
                        if (i !== scope.items.length - 1) {
                            scope.items[i].next = scope.items[i + 1];
                        } else {
                            scope.items[i].next = scope.items[0];
                        }
                        if (i !== 0) {
                            scope.items[i].prev = scope.items[i - 1];
                        } else {
                            scope.items[i].prev = scope.items[scope.items.length - 1];
                        }
                    }
                    scope.currentIndex = 0; // Initially the index is at the first item

                    scope.next = function () {
                        scope.currentIndex < scope.items.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
                    };

                    scope.prev = function () {
                        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.items.length - 1;
                    };
                }, 100)
            }
        };

    });

})();
