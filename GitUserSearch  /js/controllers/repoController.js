"use strict";
app.controller("repoController", ["$scope", "$http", "getUser", function ($scope, $http, getUser) {
        
        $scope.name = getUser.userName;
        console.log("$scope.name",$scope.name);
        $scope.userRepoInfo = function () {
            $scope.status = "success";
            getUser.userRepo($scope.name).success(function (response) {
                $scope.loadStatus = false;
               // $scope.userRepoData = response;
                $scope.loadRepo(response);
                console.log("response",response);
            });
        };
        
        $scope.loadRepo = function (userdata) {
            $http.get(userdata.repos_url)
                .success(function (reposdata) {
                    console.log("response", reposdata);
                    $scope.repoData = reposdata;
                });
        };
    }]);