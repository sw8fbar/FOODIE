'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the igapakApp
 */

(function () {

    angular.module('igapakApp').controller('MainCtrl', ['$scope', '$routeParams', '$log', '$cookieStore', '$location', '$anchorScroll', '$window', 'FacilityData', 'OrgData', 'YelpData', 'Node', 'CartItem', 'CartService', function ($scope, $routeParams, $log, $cookieStore, $location, $anchorScroll, $window, FacilityData, OrgData, YelpData, Node, CartItem, CartService) {

        this.ui={};
        this.ui.loaded = false;
        this.ui.menudisplayed = '';
        this.ui.pagetitle = 'Menu';
        this.ui.cartTitle = 'Cart';
        this.ui.flatlist = [];
        this.ui.nodes = [];
        this.ui.productNodes = [];
        this.ui.groupdisplayInactive ='';
        this.ui.showSpecials = false;
        this.ui.showYelp = false;
        this.ui.orgId = $routeParams.orgId;
        this.ui.showCart = false;

        this.userLanguage = 1;
        this.langNode = null;
        this.langIndex = 0;
        this.total = 0;
        this.cart = CartService.getCart();



        //app scope variables
        $scope.$log = $log;
        $scope.org = null;
        $scope.yelp = null;
        $scope.err = null;

        //$scope.cart = new HashMap();
        $scope.go = function ( path ) {
            $location.path( path );
        };

//        $scope.safeApply = function (fn) {
//            var phase = this.$root.$$phase;
//            if (phase == '$apply' || phase == '$digest') {
//                if (fn) fn();
//            } else {
//                this.$apply(fn);
//            }
//        };


        this.getNode = function(type, Obj, parent, flatList, productList, controller){
            var node = new Node(type, Obj, parent, controller);
            flatList.push(node);
            if (node.data.groups && node.data.groups.length > 0) {
                //alert("subgroup found");
                node.hasSubGroups = true;
                for (var i = 0; i < node.data.groups.length; i++) {
                    node.children.push(this.getNode('subgroup', node.data.groups[i], node, flatList, productList, controller));
                }
            }
            if (node.data.products && node.data.products.length > 0) {
                //alert("products found");
                for (var i = 0; i < node.data.products.length; i++) {
                    var product = this.getNode('product', node.data.products[i], node, flatList, productList, controller);
                    productList.push(product);
                    node.children.push(product);
                }
            }
//          console.log(node.data.igapakId);
            return node;
        };

        this.buildNodes = function (data, treeList,flatList, productList, controller) {
            //alert(data);
            for (var i=0; i<data.length;i++) {
                treeList.push(this.getNode('group', data[i], null, flatList, productList, controller));
            }

        };

        this.getOrgData = function (obj) {
            //get org data for orgId in request

            var promise =
                OrgData.getOrgs($routeParams.orgId);
            promise.then(
                function (payload) {
                    $scope.org = payload.data;

                    //if yelp Id present for Org
                    if($scope.org.yelpId) {
                        //get facility and article data
                        obj.getFacilityData($scope.facilities, obj, CartService);
                        // get Yelp data for org
                        obj.getYelpData();
                    } else {
                        $scope.err = "Business not found"
                    }
                },
                function (errorPayload) {
                    //alert(JSON.stringify(errorPayload));
                    $scope.err = "Business not found"
                    $log.error('failure loading org data', errorPayload);
                });
        };

        this.getFacilityData = function (facilities, obj, cartService) {

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
                            obj.buildNodes(articles[i].groups, obj.ui.nodes, obj.ui.flatlist, obj.ui.productNodes, cartService);
                            //Expand first node
                            obj.ui.flatlist[0].expandInBody();
                        }
                    }
                    //for(var j=0;j<1000000;j++);{i;//simulate wait for data to load on local}
                    obj.ui.loaded = true;
                },
                function (errorPayload) {
                    $scope.err = "Facility not found";
                    $log.error('failure loading Group data', errorPayload);
                });
        };

        this.getYelpData = function() {

            var promise =
                YelpData.getYelpData($scope.org.yelpId);
            promise.then(
                function (payload) {
                    $scope.yelp = payload.data;
                    //alert(JSON.stringify($scope.yelp));
                },
                function (errorPayload) {
                    //alert(JSON.stringify(errorPayload));
                    $log.error('failure loading Group data', errorPayload);
                });
        };

        //Get data from server at startup
        this.getOrgData(this);

        this.displayGroup = function (Object) {
            // set the location.hash to the id of
            // the element you wish to scroll to
            this.ui.showCart=false;
            this.selectMenu(this.ui.menudisplayed);
            Object.expandedInBody = true;
            var old = $location.hash();
            $location.hash('anchor' + Object.data.igapakId);
            $anchorScroll();
            //reset to old to keep any additional routing logic from kicking in
            $location.hash(old);
        };




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

//        this.getLogo = function(){
//            var logoUrl = './images/logos/' + this.ui.orgId +".png";
//            //alert(logoUrl);
//            return logoUrl;
//        };

        this.showSpecials = function() {
            this.ui.showSpecials = true;
            this.toggleMenu();
        };

        this.showYelp = function() {
            this.ui.showYelp = true;
            this.toggleMenu();
        };

        this.displayInAltLanguage = function(nodeId) {
            //alert("called displayInAltLanguage");
            this.langNode = nodeId;
        };

        this.hideDisplayInAltLanguage = function() {
            this.langNode = null;
        }

        this.showCartDetails = function() {
            this.ui.showCart = true;
            this.getTotal();

        }

        this.getTotal = function(){
            this.total = CartService.getTotal();
        }

    }]);

})();
