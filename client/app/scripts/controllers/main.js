'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the igapakApp
 */

(function () {

    angular.module('igapakApp').controller('MainCtrl', ['$scope', '$log', '$cookieStore', '$location', '$anchorScroll', '$window', 'FacilityData', 'OrgData', function ($scope, $log, $cookieStore, $location, $anchorScroll, $window, FacilityData, OrgData) {

        this.menudisplayed = '';
        this.pagetitle = 'Menu';
        $scope.$log = $log;
        $scope.groupExpanded = [1];
        $scope.productExpanded = [];

        $scope.safeApply = function (fn) {
            var phase = this.$root.$$phase;
            if (phase == '$apply' || phase == '$digest') {
                if (fn) fn();
            } else {
                this.$apply(fn);
            }
        };

        $scope.expand = function (id) {
            var index = $scope.groupExpanded.indexOf(id);
            if (index = -1) {
                $scope.groupExpanded.push(id);
            }
        };

        $scope.collapse = function (id) {
            var index = $scope.groupExpanded.indexOf(id);
            if (index != -1) {
                $scope.groupExpanded.splice(index, 1);
            }
        };

        $scope.isGroupExpanded = function (id) {
            if ($scope.groupExpanded.indexOf(id) != -1) return true;
            return false;

        };

        $scope.expandProduct = function (id) {
            var index = $scope.productExpanded.indexOf(id);
            if (index = -1) {
                $scope.productExpanded.push(id);
            }
        };

        $scope.collapseProduct = function (id) {
            var index = $scope.productExpanded.indexOf(id);
            if (index != -1) {
                $scope.productExpanded.splice(index, 1);
            }
        };

        $scope.isProductExpanded = function (id) {
            if ($scope.productExpanded.indexOf(id) != -1) return true;
            return false;

        };

        $scope.getFacilityData = function (facilities) {
            $log.info("called Async service");
            var promise =
                FacilityData.getFacilities();
            promise.then(
                function (payload) {
                    $scope.facilities = payload.data;
                },
                function (errorPayload) {
                    $log.error('failure loading Group data', errorPayload);
                });
        };

        $scope.displayGroup = function (id) {
            // set the location.hash to the id of
            // the element you wish to scroll to
//            setTimeout(function(){
//                $();
//            },500);
            $scope.expand(id);
            $scope.selectMenu($scope.menudisplayed);
            var old = $location.hash();
            $location.hash('anchor' + id);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };

        //Get data from server at startup
        $scope.getFacilityData();

        //method to toggle display the left and right menu
        $scope.selectMenu = function (setMenu) {
            if (($scope.menudisplayed !== setMenu)) {
                $scope.menudisplayed = setMenu;
            }
            else {
                $scope.menudisplayed = '';
            }
            //console.log("menudisplayed = " + this.menudisplayed);
        };

        //
    }]);

})();
