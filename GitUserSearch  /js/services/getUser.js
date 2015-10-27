
'use strict';
app.service("getUser", ["$http", function ($http) {
        this.userName = "";
        this.userSearchvalue = function (uname) {
            return $http.get("https://api.github.com/search/users?q=" + uname);
        };
        

        this.userRepo = function (loname) {
            return $http.get("https://api.github.com/users/" + loname);

        };
    }]);