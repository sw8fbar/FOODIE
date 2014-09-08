/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('subGroup', function ($compile) {
        return {
            restrict: 'E',
            compile: function(tElement, tAttr) {
                var contents = tElement.contents().remove();
                var compiledContents;
                return function(scope, iElement, iAttr) {
                    if(!compiledContents) {
                        compiledContents = $compile(contents);
                    }
                    compiledContents(scope, function(clone, scope) {
                        iElement.append(clone);
                    });
                };
            },
            link : function(scope, element, attr){
                scope.divClass =attr.divClass;
            },
            templateUrl: 'partials/sub-group.html'

        };

    });

})();