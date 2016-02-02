angular.module('exampleApp',[])
            .controller("ApplyCtrl", function ($scope, $timeout, $document) {
                $scope.credit = 0;

                setInterval(function () {
                    $scope.credit += 1;
                    //$scope.$apply();
                }, 2000);

                // tutaj nie trzeba używać $apply ponieważ $timeout wywołuje go automatycznie
                $timeout(function () {
                    $scope.credit = 1;
                }, 1000);

                // przykład użycia $scope.apply() - stosujemy kiedy dokonujemy zmian poza "światem" angulara
                // i zmiana nie powstaje w wyniku użycia obiektów (np. $timeout) czy dyrektyw (np. ng-click) angularowych.
                var btn = $document.find('button');
                btn.on('click', function () {
                    $scope.$apply();
                });
            });