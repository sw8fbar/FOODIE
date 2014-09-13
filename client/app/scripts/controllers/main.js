'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the igapakApp
 */

(function () {

    function Node(type, Obj, parent) {
        this.type = type;
        this.parent = this;
        if(parent != null)this.parent = parent;
        this.expandedInMenu = false;
        this.expandedInBody = false;
        this.class = '';
        this.children = [];
        this.hasSubGroups = false;
        this.data = Obj;
    };

    Node.prototype.expandInBody = function() {
        this.expandedInBody = true;
        this.class = " expanded";
    };

    Node.prototype.collapseInBody = function() {
        this.expandedInBody = false;
        this.class = '';
        for (var i=0; i< this.children.length; i++){
            this.children[i].collapseInBody();
        }
    };

    Node.prototype.toggleExpand = function() {
        if(this.expandedInBody)
            this.collapseInBody();
        else
            this.expandInBody();
    };

    angular.module('igapakApp').controller('MainCtrl', ['$scope', '$routeParams', '$log', '$cookieStore', '$location', '$anchorScroll', '$window', 'FacilityData', 'OrgData', function ($scope, $routeParams, $log, $cookieStore, $location, $anchorScroll, $window, FacilityData, OrgData) {

        this.ui={};
        this.ui.menudisplayed = '';
        this.ui.pagetitle = 'Menu';
        this.ui.flatlist = [];
        this.ui.nodes = [];
        this.ui.groupdisplayInactive ='';
        this.userLanguage = 1;


        //app scope variables
        $scope.$log = $log;
        $scope.org = {};

//        $scope.safeApply = function (fn) {
//            var phase = this.$root.$$phase;
//            if (phase == '$apply' || phase == '$digest') {
//                if (fn) fn();
//            } else {
//                this.$apply(fn);
//            }
//        };


        this.getNode = function(type, Obj, parent, flatList){
            var node = new Node(type, Obj, parent);
            flatList.push(node);
            if (node.data.groups && node.data.groups.length > 0) {
                //alert("subgroup found");
                node.hasSubGroups = true;
                for (var i = 0; i < node.data.groups.length; i++) {
                    node.children.push(this.getNode('subgroup', node.data.groups[i], node, flatList));
                }
            }
            if (node.data.products && node.data.products.length > 0) {
                //alert("products found");
                for (var i = 0; i < node.data.products.length; i++) {
                    node.children.push(this.getNode('product', node.data.products[i], node, flatList));
                }
            }
//          console.log(node.data.igapakId);
            return node;
        };

        this.buildNodes = function (data, treeList,flatList) {
            //alert(data);
            for (var i=0; i<data.length;i++) {
                treeList.push(this.getNode('group', data[i], null, flatList));
            }

        };

        this.getOrgData = function () {
            $log.info("called Async service");
            var promise =
                OrgData.getOrgs($routeParams.orgId);
            promise.then(
                function (payload) {
                    $scope.org = payload.data;
                    //alert(JSON.stringify(orgs));
                },
                function (errorPayload) {
                    //alert(JSON.stringify(errorPayload));
                    $log.error('failure loading Group data', errorPayload);
                });
        };

        this.getFacilityData = function (facilities, obj) {
            $log.info("called Async service");
            var promise =
                FacilityData.getFacilities($routeParams.facilityId,$routeParams.articleId);
            promise.then(
                function (payload) {
                    //$scope.facilities = payload.data;
                    //alert(JSON.stringify(payload));
                    var articles = payload.data.articles;
                    for (var i=0; i<articles.length; i++) {
                        if (articles[i].igapakId == $routeParams.articleId) {
                            //alert(JSON.stringify(articles[i]));
                            obj.buildNodes(articles[i].groups, obj.ui.nodes, obj.ui.flatlist);
                            //Expand first node
                            obj.ui.flatlist[0].expandInBody();
                        }
                    }
                },
                function (errorPayload) {
                    $log.error('failure loading Group data', errorPayload);
                });
        };

        this.displayGroup = function (Object) {
            // set the location.hash to the id of
            // the element you wish to scroll to
            this.selectMenu(this.ui.menudisplayed);
            Object.expandedInBody = true;
            var old = $location.hash();
            $location.hash('anchor' + Object.data.igapakId);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };

        //Get data from server at startup
        this.getOrgData();
        //alert(JSON.stringify($scope.org));
        this.getFacilityData($scope.facilities, this);

        //method to toggle display the left and right menu
        this.selectMenu = function (setMenu) {
            if ((this.ui.menudisplayed !== setMenu)) {
                this.ui.menudisplayed = setMenu;
            }
            else {
                this.ui.menudisplayed = '';
            }
            if(this.ui.menudisplayed !== ''){
                this.ui.groupdisplayInactive = 'inactive';
            } else {
                this.ui.groupdisplayInactive = '';
            }

        };

        this.toggleMenu = function() {
            this.selectMenu(this.ui.menudisplayed);
        }

        //method to switch languages
        this.changeLanguage = function(LanguageId){
            this.userLanguage = LanguageId;
            this.toggleMenu();
        }

        this.getLogo = function(){
            return 'images/logos/' + $scope.org.logo;
        };
    }]);

})();
