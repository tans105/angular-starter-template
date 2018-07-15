'use strict';

appModule.controller('LoginCtrl', function ($scope, $rootScope, $log, $state) {
   console.log("Login Controller called");

   $scope.login=function(user){

       /*
       Call the login service and perform API validations
       */

       $rootScope.authenticated=true;
       $state.go('home');
   }
});

