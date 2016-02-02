/// <reference path='../../../../typings/tsd.d.ts' />

module app.directives {

    import IItemStorage = app.services.IItemStorage;

    export interface IItem {
        category: string;
        description: string;
        id: number;
        img: string;
        price: number;
        title: string;
    }

    export interface IItemScope extends ng.IScope {
        itemStorage: IItemStorage;
        model: IItem;
        price: number;
        timeoutId: ng.IPromise<void>;
    }
}
