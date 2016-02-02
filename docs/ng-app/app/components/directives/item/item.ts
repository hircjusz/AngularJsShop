/// <reference path='../../../../typings/tsd.d.ts' />

module app.directives {

    export function Item($timeout:ng.ITimeoutService):ng.IDirective {
        return {
            templateUrl: 'components/directives/item/item.html',
            scope: {
                model: "="
            },
            controller: function ($scope:IItemScope, $rootScope:IRootScope, itemStorage:app.services.IItemStorage) {

                $scope.itemStorage = itemStorage;

                // przekazuję wartość
                $scope.price = $scope.model.price;

                $scope.$watch('price', function (newVal, oldVal) {
                    if (!angular.equals(newVal, oldVal)) {
                        $rootScope.userState.unsavedData = true;
                        $timeout.cancel($scope.timeoutId);
                        $scope.timeoutId = $timeout(function () {
                            // aktualizuje model
                            $scope.model.price = $scope.price;
                            // wysyłam request
                            itemStorage.update($scope.model);
                        }, 1000);
                    }
                });
            }
        }
    }

    angular
        .module('app.Item', [])
        .directive('item', Item);

}