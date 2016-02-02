/// <reference path="../../../typings/tsd.d.ts" />

module app.services {
    export interface IUserState {
        access: boolean;
        userName: boolean;
        unsavedData: boolean;
    }

    export interface IUserStorage {
        state: IUserState;
        setUserAccess (access:boolean, msg:any):void;
        signIn ():void;
        signOut ():void;
        checkUser ():void;
    }
}
