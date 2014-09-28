/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.directive('slideSelector', function () {
        return {
            restrict: 'E',
            scope: {
                items: '=',
                onNodeClick: '&',
                currentIndex: '@'
            },
            templateUrl: 'partials/slide-selector.html',
            link: function(scope, element, attribute) {
                for (var i = 0; i < scope.items.length; i++) {
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
            }
//            },
//            template: '<div class="slide-selector">'
//                        +'<ul class="slider">'
//                        +'<li class="arrowLeft" ng-click="prev()"><div><img src="images/icons/leftArrow.png"/></div></li>'
//                        +'<li>'
//                            +'<div class="slide">'
//                                +'<img src="images/{{items[currentIndex].prev.flag}}"/>'
//                                +'<p>{{items[currentIndex].prev.label}}</p>'
//                            +'</div>'
//                        +'</li>'
//                        +'<li ng-click="onNodeClick({select: currentIndex})">'
//                            +'<div class="slide-selected">'
//                                +'<img src="images/{{items[currentIndex].flag}}"/>'
//                                +'<p>{{items[currentIndex].label}}</p>'
//                            +'</div>'
//                        +'</li>'
//                        +'<li>'
//                            +'<div class="slide">'
//                                +'<img src="images/{{items[currentIndex].next.flag}}"/>'
//                                +'<p>{{items[currentIndex].next.label}}</p>'
//                            +'</div>'
//                        +'</li>'
//                        +'<li>'
//                            +'<div class="slide">'
//                                +'<img src="images/{{items[currentIndex].next.next.flag}}"/>'
//                                +'<p>{{items[currentIndex].next.next.label}}</p>'
//                            +'</div>'
//                        +'</li>'
//                        +'<li class="arrowRight" ng-click="next()"><div><img src="images/icons/rightArrow.png"/></div></li>'
//                        +'</ul>'
//                      +'</div>'
        };

    });

})();
