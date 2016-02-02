/// <reference path='../typings/tsd.d.ts' />

module app {

    import IUserState = app.services.IUserState;

    export interface IRootScope extends ng.IRootScopeService {
        userState:IUserState;
        _: Function;
    }
}