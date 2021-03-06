'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the igapakApp
 */

(function () {

    angular.module('igapakApp').
        controller('MainCtrl', ['$scope',
            '$routeParams',
            '$log',
            '$cookieStore',
            '$location',
            '$anchorScroll',
            '$window',
            'FacilityData',
            'OrgData',
            'YelpData',
            'Node',
            'CartItem',
            'CartService',
            'UserService',
            'LanguageService',
            function ($scope, $routeParams, $log, $cookieStore, $location, $anchorScroll, $window, FacilityData, OrgData, YelpData, Node, CartItem, CartService, UserService, LanguageService) {
                this.ui = {};
                this.ui.loaded = false;
                this.ui.menudisplayed = '';
                this.ui.pagetitle = 'Menu';
                this.ui.cartTitle = 'Cart';
                this.ui.likeTitle = 'Favorites';
                this.ui.flatlist = [];
                this.ui.nodes = [];
                this.ui.productNodes = [];
                this.ui.likedNodes = UserService.getLiked({});
                this.ui.orgId = $routeParams.orgId;
                this.ui.groupdisplayInactive = '';

                //display home screen by default
                this.ui.screenSwitch = [true, false, false, false, false, false];
                this.ui.showhome = 0;
                this.ui.showmain = 1;
                this.ui.showSpecials = 2;
                this.ui.showliked = 3;
                this.ui.showYelp = 4;
                this.ui.showCart = 5;

                this.ui.languages = null;

                this.ui.labels = LanguageService.getLabels();

                this.userLanguage = 1;
                this.userUILanguage = 1;
                this.langNode = null;
                this.total = 0;
                this.cart = CartService.getCart();


                //app scope variables
                $scope.$log = $log;
                $scope.org = null;
                $scope.yelp = null;
                $scope.err = null;
                $scope.currencyId = null;

                //$scope.cart = new HashMap();
                $scope.go = function (path) {
                    $location.path(path);
                };

                this.getNode = function (type, Obj, parent, flatList, productList, cartService, userService) {
                    var node = new Node(type, Obj, parent, cartService, userService);
                    flatList.push(node);
                    if (node.data.groups && node.data.groups.length > 0) {
                        //alert("subgroup found");
                        node.hasSubGroups = true;
                        for (var i = 0; i < node.data.groups.length; i++) {
                            node.children.push(this.getNode('subgroup', node.data.groups[i], node, flatList, productList, cartService, userService));
                        }
                    }
                    if (node.data.products && node.data.products.length > 0) {
                        //alert("products found");
                        for (var i = 0; i < node.data.products.length; i++) {
                            var product = this.getNode('product', node.data.products[i], node, flatList, productList, cartService, userService);
                            productList.push(product);
                            node.children.push(product);
                        }
                    }
                    return node;
                };

                this.buildNodes = function (data, treeList, flatList, productList, cartService, userService) {
                    //alert(data);
                    for (var i = 0; i < data.length; i++) {
                        treeList.push(this.getNode('group', data[i], null, flatList, productList, cartService, userService));
                    }

                };

                this.getOrgData = function (obj) {
                    //get org data for orgId in request

                    var promise =
                        OrgData.getOrgs($routeParams.orgId);
                    promise.then(
                        function (payload) {
                            $scope.org = payload.data;
                            if (!$scope.org.phone) $scope.org.phone = '+1-111-111-1111';

                            if($scope.org){
                                //get facility and article data
                                obj.getFacilityData($scope.facilities, obj, CartService, UserService);
                                //if yelp Id present for Org
                                if ($scope.org.yelpId) {
                                    // get Yelp data for org
                                    obj.getYelpData();
                                }
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

                this.getFacilityData = function (facilities, obj, cartService, userService) {

                    var promise =
                        FacilityData.getFacilities($routeParams.facilityId, $routeParams.articleId);
                    promise.then(
                        function (payload) {
                            //$scope.facilities = payload.data;
                            //alert(JSON.stringify(payload));

                            $scope.facility = payload.data;
                            $scope.currencyId = $scope.facility.currencyId;
                            var articles = $scope.facility.articles;
                            for (var i = 0; i < articles.length; i++) {
                                if (articles[i].igapakId == $routeParams.articleId) {
                                    //alert(JSON.stringify(articles[i]));
                                    obj.buildNodes(articles[i].groups, obj.ui.nodes, obj.ui.flatlist, obj.ui.productNodes, cartService, userService);
                                    //Expand first node
                                    //obj.ui.flatlist[0].expandInBody();
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

                this.getYelpData = function () {

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
                    this.switchScreen(this.ui.showmain);
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
                    if (this.ui.menudisplayed !== '') {
                        this.ui.groupdisplayInactive = 'inactive';
                    } else {
                        this.ui.groupdisplayInactive = '';
                    }

                };

                this.toggleMenu = function () {
                    this.selectMenu(this.ui.menudisplayed);
                }

                //method to switch between languages
                this.changeLanguage = function (LanguageId) {
                    this.userLanguage = LanguageId;
                    for(var i=0;i<this.ui.labels.LangIndex.length;i++){
                        //alert("from Org Service = "+ $scope.org.languages[LanguageId].id);
                        //alert("from Language Service = "+ this.ui.labels.LangIndex[i].id);
                        if($scope.org.languages[LanguageId].id.toUpperCase() == this.ui.labels.LangIndex[i].id.toUpperCase()){
                           this.userUILanguage = i;
                        }
                    }

                    this.toggleMenu();
                    //alert(this.userLanguage);
                }

                this.displayInAltLanguage = function (nodeId) {
                    //alert("called displayInAltLanguage");
                    this.langNode = nodeId;
                };

                this.hideDisplayInAltLanguage = function () {
                    this.langNode = null;
                }

                this.getTotal = function () {
                    this.total = CartService.getTotal();
                }

                this.switchScreen = function (screenId) {
                    this.toggleMenu();
                    for (var i = 0; i < this.ui.screenSwitch.length; i++)
                        this.ui.screenSwitch[i] = false;
                    this.ui.screenSwitch[screenId] = true;
                }

                $scope.changeLang = function(languageId){
                    $scope.mainctrl.changeLanguage(languageId);
                    $scope.mainctrl.switchScreen($scope.mainctrl.ui.showmain);
                }

                this.showCartDetails = function () {
                    this.switchScreen(this.ui.showCart);
                    this.getTotal();

                }
            }]);

})();
