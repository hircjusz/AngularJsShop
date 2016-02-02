/// <reference path="../../../typings/tsd.d.ts" />

module app.services {

    import ICookiesService = angular.cookies.ICookiesService;

    export class UserStorage implements IUserStorage {

        public state;

        constructor(private $cookies:angular.cookies.ICookiesService,
                    private CONFIG,
                    private $http,
                    private modalGenerator) {
            this.state = {
                access: false,
                userName: false,
                unsavedData: false,
            }
        }

        setUserAccess(access, msg = null):void {
            this.state.access = access;
            access
                ? this.$cookies.put('logged', access)
                : this.$cookies.remove('logged');
            msg && alert(msg);
        }

        signIn():void {
            this.modalGenerator
                .open('components/services/modal/tpls/login.html', 'sm')
                .then((modalData) => {
                    this.$http
                        .post(this.CONFIG.API_PREFIX + 'login/', modalData)
                        .success(() => this.setUserAccess(true, 'zalogowano pomyślnie'))
                });
        }

        signOut():void {
            this.$http
                .get(this.CONFIG.API_PREFIX + 'logout/')
                .success(() => this.setUserAccess(false));
        }

        checkUser() {
            this.$cookies.get('logged')
                ? this.setUserAccess(true)
                : this.signIn();
        }
    }

    angular
        .module('app.srv.userStorage', ['ngCookies', 'app.modalGenerator'])
        .service('userStorage', UserStorage);

}