'use strict';

appModule.controller('LoginCtrl', function (LoginService, $scope, $rootScope, $log, $state) {
   console.log("Login Controller called");

   $scope.login=function(user){

       /*
       Call the login service and perform API validations
       */

       LoginService.authenticate(user,onLoginSuccess);



   }


   var onLoginSuccess=function(loginResponse){
       /*
       Using dummy API response
        */
       $log.info(loginResponse);

       /**
        * if status =200 and response has data -> Login success
        * else redirect to login page
        */

       if(loginResponse.status=200 && angular.isDefined(loginResponse)){
           LoginService.generateCookie(loginResponse);
           $rootScope.authenticated=true;
           $state.go('home');

       }else{
           //Set error message
       }


   }
});

