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
            template: '<div id="{{\'group\'+group.groupId}}" class="productGroup pull-left" id="{{group.groupId}}">'
                       + '<ul>'
                       +    '<li ng-if="expanded.indexOf(group.groupId) !== -1"><div class="pull-left" ><img src="../images/icons/minus_orange.png" ng-click="selectMenu(\'L\')"/></div></li>'
                       +    '<li><div ng-click="selectMenu(\'L\')"><p>&nbsp;&nbsp;{{group.name[1].label}}&nbsp;&nbsp;</p></div></li>'
                       +    '<li><div ng-if="$index === 0" class="pull-right" id="search"><img src="../images/icons/search.png"/></div></li>'
                       +    '<li><div class="pull-right"><img ng-click="collapse(group.groupId)" ng-if="expanded.indexOf(group.groupId) !== -1" src="../images/icons/minus_orange.png"/><img ng-click="expand(group.groupId)" ng-if="expanded.indexOf(group.groupId) === -1" src="../images/icons/plus_blue.png"/></div></li>'
                       + '</ul>'
                      +'</div>'


//                      +'<div id= "{{group.groupId}}"><h4 class="productGroup">{{group.name[1].label}}</h4></div>'
//                      '<div ng-if="$index === 0"> found subgroups</div>'+
//                      +'<div>'
                      //+'<div class="menuSubItem" ng-if="group.subgroups" ng-show="$index === 0">'
                        +'<sub-group ng-show="isExpanded(group.groupId)" ng-repeat="group in group.subgroups" productSubGroup></sub-group>'
                        +'<product ng-show="isExpanded(group.groupId)" ng-repeat="product in group.products"></product>'
//                      +'</div>'
//                      +'<div class="menuSubItem" ng-show="true">'
//                        +'<product ng-repeat="product in group.products"></product>'
//                      +'</div>'

        };

    });

})();