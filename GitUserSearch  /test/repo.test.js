describe('repoController', function () {
    'use strict';
    var repoController, scope, getDataMock, d;
    beforeEach(module('app'));
    beforeEach(module(function($provide){
        $provide.service('getUser', function() {
            getDataMock = sinon.stub({
                userName: "abhilash",
                userRepo: function(name) {},
                data: [],
            });
            return getDataMock;
        });
    }));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        repoController = $controller('repoController', {
            $scope: scope
        });        
    }));
    it('should exist repocontroller', function() {
        expect(repoController).to.exist;
    });
    it('assigns getdatamock.userRepo to scope.userRepoData', function () {
        //scope.name = "abhilash";
      //  scope.userRepoInfo(); 
        //var func = sinon.spy(scope.userRepoInfo());
      //  expect(scope.status).to.equal('success');
    });

});