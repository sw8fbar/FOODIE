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
            template: '<div id="{{\'group\'+group.groupId}}" class="productSubGroup pull-left" id="{{group.groupId}}">'
                       + '<ul>'
                       +    '<li><div class="pull-left" ><img class="separator" src="../images/icons/hDots.png" ng-click="mainctrl.selectMenu(\'L\')"/></div></li>'
                       +    '<li><div ng-click="$scope.selectMenu(\'L\')"><p>&nbsp;&nbsp;{{group.name[1].label}}&nbsp;&nbsp;</p></div></li>'
                       +    '<li><div class="pull-right"><img id="rightSubGroupImage" ng-if="expanded.indexOf(group.groupId) != -1" src="../images/icons/menuSectionArrow.png"/><img id="rightSubGroupImage" ng-if="!expanded.indexOf(group.groupId) != -1" src="../images/icons/menuSectionArrow.png"/></div></li>'
                       + '</ul>'
                      +'</div>'


//                      +'<div id= "{{group.groupId}}"><h4 class="productGroup">{{group.name[1].label}}</h4></div>'
//                      '<div ng-if="$index === 0"> found subgroups</div>'+
//                      +'<div>'
                      //+'<div class="menuSubItem" ng-if="group.subgroups" ng-show="$index === 0">'
                        +'<sub-group ng-show="isExpanded(group.groupId)" ng-repeat="group in group.subgroups"></sub-group>'
                        +'<product ng-show="isExpanded(group.groupId)" ng-repeat="product in group.products"></product>'
//                      +'</div>'
//                      +'<div class="menuSubItem" ng-show="true">'
//                        +'<product ng-repeat="product in group.products"></product>'
//                      +'</div>'

        };

    });

})();