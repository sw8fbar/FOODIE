/**
 * Created by ajay on 9/2/14.
 */
/**
 * Created by ajay on 9/2/14.
 */
'use strict';

(function () {

    angular.module('igapakApp').directive('leftMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'partials/left-menu.html'/*
            template: '<div class="sidebar sidebar-left animate-show" parent-active-class="sidebar-left-in" ng-show="mainctrl.menudisplayed===\'L\'" >' +
                '<div class="scrollable scrollable-content">' +
                '<!-- Blank DIVs to push actual menu down -->' +
                '<div class="menuFiller">&nbsp;</div>' +
                '<div class="rightMenu"><div class="menuOption"><h4 class="menuHeading">Group List</h4></div></div>'+
                '</div>' +
                '</div>'*/
        };

    });

})();
