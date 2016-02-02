/// <reference path='../../../typings/tsd.d.ts' />

module app.services {

    import IItem = app.directives.IItem;

    export class ItemStorage implements IItemStorage {

        private api:IItemsResource;
        public items:Array<IItem>;
        public item:IItem;

        constructor(private $resource:ng.resource.IResourceService,
                    private CONFIG,
                    private $rootScope:IRootScope,
                    private modalGenerator) {
            this.api = <IItemsResource> this.$resource(CONFIG.API_PREFIX + 'items/:id', {id: "@id"}, {
                update: {
                    method: 'PUT'
                }
            });
        }

        fetch():void {
            this.api
                .get((resp:IResponseItems) => {
                    this.items = resp.data;
                });
        }

        get(id):void {
            this.api
                .get({id: id}, (resp:IResponseItem) => {
                    this.item = resp.data;
                });
        }

        update(item):void {
            this.$rootScope.userState.unsavedData = true;
            this.api
                .update(item, () => this.$rootScope.userState.unsavedData = false);
        }

        delete(item):void {
            this.modalGenerator
                .open('components/services/modal/tpls/delete-item.html', 'lm', item)
                .then((modalData) => {
                    this.api
                        .delete({id: item.id}, () => {
                            this.fetch();
                            alert('element: ' + item.title + ' został usunięty z powodu:\n' + modalData.reason);
                        });
                });
        }

        add():void {
            this.modalGenerator
                .open('components/services/modal/tpls/add-item.html', 'lm')
                .then((modalData) => {
                    this.api
                        .save(modalData, (responseData) => {
                            this.items.push(responseData.data)
                        })
                });
        }
    }

    angular
        .module('app.itemStorage', ['app.modalGenerator'])
        .service('itemStorage', ItemStorage);
}


