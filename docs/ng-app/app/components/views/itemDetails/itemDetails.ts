/// <reference path="../../../../typings/tsd.d.ts" />

module app.views {
    export class ItemDetails {
        constructor($scope, itemStorage:services.IItemStorage) {
            $scope.itemStorage = itemStorage;
            $scope.update = function () {
                itemStorage.update($scope.itemStorage.item);
            }
        }
    }

    angular
        .module('app.view.itemDetails', ['ui.router'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('product-details', {
                    url: '/product-details',
                    template: '<ui-view></ui-view>'
                })
                .state('product-details.item', {
                    url: '/:id',
                    templateUrl: 'components/views/itemDetails/itemDetails.html',
                    controller: ItemDetails,
                    resolve: {
                        responseData: function (itemStorage, $stateParams) {
                            itemStorage.get($stateParams.id);
                        }
                    }
                });
        })
}