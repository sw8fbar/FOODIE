/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    var app = angular.module('igapakApp');

    app.directive('rightMenu', function () {
        return {
            restrict: 'E',
            template: '<div class="sidebar sidebar-right" parent-active-class="sidebar-right-in" ng-show="mainctrl.menudisplayed===\'R\'" >' +
                '<div class="scrollable scrollable-content">' +
                '<!-- Blank DIVs to push actual menu down -->' +
                '<div class="menuFiller">&nbsp;</div>' +
                '<div class="rightMenu" ng-repeat="action in userActions">' +
                '<div class="rightMenuOption">' +
                '<div>' +
                '<h4 class="menuHeading">' +
                '&nbsp; &nbsp; <img ng-src="{{action.image}}"/> &nbsp; &nbsp; {{action.name}}' +
                '</h4>' +
                '</div>' +
                '<div ng-show="action.languages" class="menuSubItem">' +
                '<div ng-if="action.name === \'Change Language\'" ng-repeat="detail in action.languages" >' +
                '<div>' +
                '<img ng-src="{{detail.flag}}" height=35px width=45px /> &nbsp; &nbsp;{{detail.name}}' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="menuFiller">&nbsp;</div>' +
                '</div>'
        };

    });

})();
