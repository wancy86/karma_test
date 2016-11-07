'use strict';
describe('Hevily',function(){
    var scope;
    //module都是angular.mock.module的缩写
    beforeEach(module('netsos.cnblogs.com'));
    //inject都是angular.mock.inject的缩写
    beforeEach(inject(function($rootScope,$controller){
        scope = $rootScope.$new();
        $controller('Hevily',{$scope:scope});
    }));
    it('text = hello',function(){
        expect(scope.text).toBe('hello');
    });
});