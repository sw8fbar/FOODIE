/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('group', function ($compile) {
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
            template: '<div id= "{{group.groupId}}"><h4 class="productGroup">{{group.name[1].label}}</h4></div>'
                      //'<div ng-if="$index === 0"> found subgroups</div>'+
                      +'<div>'
                      //+'<div class="menuSubItem" ng-if="group.subgroups" ng-show="$index === 0">'
                        +'<group ng-repeat="group in group.subgroups"></group>'
                        +'<product ng-show="true" ng-repeat="product in group.products"></product>'
                      +'</div>'
//                      +'<div class="menuSubItem" ng-show="true">'
//                        +'<product ng-repeat="product in group.products"></product>'
//                      +'</div>'

        };

    });

})();
