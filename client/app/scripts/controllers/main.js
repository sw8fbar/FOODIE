'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the igapakApp
 */

(function () {

    angular.module('igapakApp').controller('MainCtrl', ['$scope','$log','$cookieStore', '$location', '$anchorScroll', 'FacilityData', 'OrgData', function ($scope, $log, $cookieStore, $location, $anchorScroll, FacilityData, OrgData) {

        this.menudisplayed = '';
        this.pagetitle = 'Menu';
        $scope.$log = $log;
        $scope.expanded = [1];

        $scope.expand = function(id) {
            var index = $scope.expanded.indexOf(id);
            if (index = -1) {
                $scope.expanded.push(id);
            }
        };

        $scope.collapse = function(id) {
            var index = $scope.expanded.indexOf(id);
            if (index != -1) {
                $scope.expanded.splice(index,1);
            }
        };

        $scope.isExpanded = function(id){
           if($scope.expanded.indexOf(id) != -1) return true;
           return false;

        };

        $scope.getFacilityData = function(facilities) {
            $log.info("called Async service");
            var promise =
                FacilityData.getFacilities();
            promise.then(
                function(payload) {
                    $scope.facilities = payload.data;
                },
                function(errorPayload) {
                    $log.error('failure loading Group data', errorPayload);
                });
        };

        $scope.displayGroup = function(id) {
            // set the location.hash to the id of
            // the element you wish to scroll to
            $scope.selectMenu($scope.menudisplayed);
            var old = $location.hash();
            $location.hash('group'+id);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
            $scope.expand(id);

        };

        //Get data from server at startup
        $scope.getFacilityData();

        $scope.userActions = [
            { id: 0, name: 'Grid View', image: 'images/icons/keypad.png', route: '/gridView' },
            { id: 1, name: 'Menu Sections', image: 'images/icons/note.png', route: '/menu'},
            { id: 2, name: 'Recommended', image: 'images/icons/ribbon.png', route: '/recommended'},
            { id: 3, name: 'Liked', image: 'images/icons/like_grey.png', route: '/liked'},
            { id: 4, name: 'Shopping Bag', image: 'images/icons/shoppingBag.png', route: '/cart'},
            { id: 5, name: 'Settings', image: 'images/icons/gear.png', route: '/settings'},
            { id: 6, name: 'Change Language',
                image: 'images/icons/refresh_orange.png', route: '/languages',
                languages: [
                    {id: 1, flag: 'images/Flags/usa.png', name: 'English', route: '/languages/en'},
                    {id: 2, flag: 'images/Flags/korea.png', name: 'Korean', route: '/languages/kr'},
                    {id: 3, flag: 'images/Flags/china.png', name: 'Chinese', route: '/languages/cn'},
                    {id: 4, flag: 'images/Flags/japan.png', name: 'Japanese', route: '/languages/jp'},
                    {id: 5, flag: 'images/Flags/france.png', name: 'French', route: '/languages/fr'},
                    {id: 6, flag: 'images/Flags/portugal.png', name: 'Portuguese', route: '/languages/pr'},
                    {id: 6, flag: 'images/Flags/germany.png', name: 'German', route: '/languages/de'},
                    {id: 6, flag: 'images/Flags/russia.png', name: 'Russian', route: '/languages/ru'},
                    {id: 6, flag: 'images/Flags/iran.png', name: 'Farsi', route: '/languages/fa'},
                    {id: 6, flag: 'images/Flags/poland.png', name: 'Polish', route: '/languages/po'},
                    {id: 6, flag: 'images/Flags/saudi-arabia.png', name: 'Arabian', route: '/languages/ar'},
                    {id: 6, flag: 'images/Flags/vietnam.png', name: 'Vietnamese', route: '/languages/vt'},
                    {id: 6, flag: 'images/Flags/spain.png', name: 'Spanish', route: '/languages/sp'},
                    {id: 5, flag: 'images/Flags/india.png', name: 'Hindi', route: '/languages/hi'}
                ]
            }
        ];

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
