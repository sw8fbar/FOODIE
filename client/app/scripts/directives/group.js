/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('group', function ($compile) {
        return {
            restrict: 'E',
            terminal: true,
            compile: function(scope, tElement, tAttr) {
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
//            templateUrl: 'partials/group-to_delete.html'
            templateUrl: 'partials/group-table.html'

        };

    });

})();