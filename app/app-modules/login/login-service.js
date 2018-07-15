'use strict';


appModule.service('LoginService', function ($http, $cookies) {
    var cookieValidDuration = 30; //Number of minutes for which cookie will be valid

    /**
     *
     * @param user
     * @param callback
     * The method will call the API and response will be passed to callback. Null value to callback will imply server is not responding
     */
    this.authenticate = function (user, callback) {


      //Actual implemetation

      /*  $http({
            url: "<Server URL>",//Authentication server API Url
            method: "POST",
            data: {'userId': user.username, 'password': user.password}
        })
            .then(function (response) {
                    callback(response);
                },
                function (response) {
                    //Null parameter
                    callback();
                });
       */

      //Dummy Response
      var response={
          status: 200,
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          msg: "Success"
      }
      callback(response);
    }

    /**
     *
     * @param data
     * The method will generate cookie which will be used throughout the application
     */
    this.generateCookie = function (data) {
        var token=data.token;//Token will be provided on every successful login. Implementations can be overridden based on requirement
        var today = new Date();
        var expiresValue = new Date(today);
        expiresValue.setMinutes(today.getMinutes() + cookieValidDuration);

        var cookieData = {
            "token": token
        };
        $cookies.putObject("cookieData", cookieData, {'expires': expiresValue});
    }

});