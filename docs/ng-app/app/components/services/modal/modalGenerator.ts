/// <reference path='../../../../typings/tsd.d.ts' />

module app.services {

    import IModalService = angular.ui.bootstrap.IModalService;

    export class ModalGenerator {
        constructor(private $uibModal:IModalService) {

        }

        open(tplUrl, size, model) {
            var myModal = this.$uibModal.open({
                templateUrl: tplUrl,
                size: size,
                controller: function ($scope) {
                    $scope.model = model || {};
                    $scope.ok = function (valid) {
                        if (valid) {
                            myModal.close($scope.model);
                        }
                    };
                    $scope.cancel = function () {
                        myModal.dismiss('cancel');
                    };
                }
            });
            return myModal.result;
        }
    }

    angular
        .module('app.modalGenerator', ['ui.bootstrap', 'app.inputDctv', 'app.uploadDctv'])
        .service('modalGenerator', ModalGenerator);
}