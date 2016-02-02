/// <reference path='../../../typings/tsd.d.ts' />

module app.services {

    import IItem = app.directives.IItem;

    export interface IItemStorage {
        fetch ():void;
        get (id:number):void;
        update (item:IItem):void;
        delete (item:IItem):void;
    }

    export interface IResponseItems {
        status: string;
        data: Array<IItem>;
    }

    export interface IResponseItem {
        status: string;
        data: IItem;
    }

    export interface IResponseResource extends ng.resource.IResource<IResponseItems>{

    }

    export interface IItemsResource extends ng.resource.IResourceClass<IResponseResource> {
        update(param:IItem, success:Function, error?:Function);
    }
}
