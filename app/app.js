'use strict';

// Declare app level module which depends on views, and components
var appModule=angular.module('myApp', [
  'ui.router','ngCookies'
]);

appModule.controller('MainCtrl',function($scope, $rootScope, $cookies){
    var cookieData = $cookies.getObject('cookieData');
    $rootScope.authenticated = (cookieData)?true:false;
    console.log("Main Controller called");


    /*
   Logout implementation
    */

    $scope.logout=function(){
        $cookies.remove('cookieData');
        $rootScope.authenticated=false;
    }
});

appModule.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'home',
        url: '/home',
        templateUrl: 'app-modules/main/home/home.html',
        controller: 'HomeCtrl'
    }).state({
        name: 'home.module1',
        url: '/module1',
        parent: 'home',
        templateUrl: 'app-modules/main/home/home-modules/module-2/module-2.tpl.html',
        controller: 'M1Ctrl'
    }).state({
        name: 'home.module2',
        url: '/module2',
        parent: 'home',
        templateUrl: 'app-modules/main/home/home-modules/module-1/module-1.tpl.html',
        controller: 'M2Ctrl'
    });

    //Default route to be configured
    $urlRouterProvider.otherwise('/home');

});

