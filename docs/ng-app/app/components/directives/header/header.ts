/// <reference path='../../../../typings/tsd.d.ts' />

module app.directives {

    export function HeaderDctv():ng.IDirective {
        return {
            templateUrl: "components/directives/header/header.html",
            controller: function (userStorage:services.IUserStorage, itemStorage:services.IItemStorage) {
                this.userStorage = <services.IUserStorage> userStorage;
                this.itemStorage = <services.IItemStorage> itemStorage;
            },
            controllerAs: "vm"
        }
    }

    angular
        .module('app.dctv.header', ['app.srv.userStorage', 'app.itemStorage'])
        .directive('headerDctv', HeaderDctv);
}