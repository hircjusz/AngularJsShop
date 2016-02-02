angular
    .module('app.modal', [])
    .service('modalSrv', function ($uibModal) {
        return {
            show: function (tpl, itemData, size) {
                var myModal = $uibModal.open({
                    templateUrl: tpl,
                    size: size,
                    resolve: {
                        model: function () {
                            return itemData;
                        }
                    },
                    controller: function ($scope, model) {
                        $scope.model = model;
                        $scope.ok = function (valid) {
                            if (valid) {
                                myModal.close($scope);
                            } else {
                                $scope.errorMsg = true;
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
    })
