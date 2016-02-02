/// <reference path='../../../../typings/tsd.d.ts' />

module app.views {

    import IItemStorage = app.services.IItemStorage;

    export class ItemsCtrl {

        itemsControl:Object;

        constructor(private itemStorage:IItemStorage) {
            this.itemStorage.fetch();
            this.itemsControl = {
                currentPage: 1,
                itemsPerPage: 5
            };
        }
    }

    angular
        .module('app.view.items', ['ui.router', 'app.itemStorage', 'app.Item', 'app.startFromFtr'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('items', {
                    url: "/items",
                    templateUrl: "components/views/items/items.html",
                    controller: ItemsCtrl,
                    controllerAs: "vm"
                });
        });
}
