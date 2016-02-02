/// <reference path="../typings/tsd.d.ts" />

module app {
    import IScope = angular.IScope;

    interface ICtrlScope extends IScope {
        welcome: string;
        currentDate: Date;
    }

    class Ctrl {
        constructor($scope:ICtrlScope) {
            $scope.welcome = 'hello';
            $scope.currentDate = new Date();
        }
    }

    angular
        .module('app', [])
        .controller('Ctrl', Ctrl)
        .run(function () {
            console.log('run');
        })
}