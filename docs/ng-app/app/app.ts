/// <reference path='../typings/tsd.d.ts' />

module app {

    import IUserStorage = app.services.IUserStorage;

    export class AppBuilder {
        app:ng.IModule;

        constructor(name:string) {
            this.app = angular
                .module(name, [
                    'ui.router',
                    'ngResource',
                    'ngCookies',
                    'aside.menu',
                    'app.view.items',
                    'app.view.itemDetails',
                    'app.view.shop',
                    'app.view.faq',
                    'app.view.contact',
                    'app.dctv.header',
                    'app.srv.userStorage'
                ])
                .constant('CONFIG', {API_PREFIX: 'http://js.edu.pl/api/'})
                .config(($httpProvider) => {
                    $httpProvider.defaults.withCredentials = true;
                })
                .run(($rootScope:IRootScope, userStorage:IUserStorage) => {
                        $rootScope.userState = userStorage.state;
                        userStorage.checkUser();
                        $rootScope._ = _;
                    }
                );
        }
    }

    new app.AppBuilder('app');
}