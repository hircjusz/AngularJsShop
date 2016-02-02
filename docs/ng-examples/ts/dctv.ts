module app {
    export class App {
        app:ng.IModule;

        constructor() {
            this.app = angular
                .module('app', [])
                .controller('Ctrl', Ctrl)
                .directive('myWorker', MyWorker);
        }
    }

    export class Ctrl {
        constructor($scope) {
            $scope.friends = [
                {name: 'John', profession: 'designer'},
                {name: 'Mike', profession: 'front-end developer and designer'},
                {name: 'James', profession: 'back-end and front-end developer'}
            ];
            $scope.action = function (param) {
                alert(angular.toJson(param));
            };
        }
    }

    export function MyWorker() {
        return {
            transclude: true,
            replace: true,
            scope: {
                name: "@", // by value; one way data binding
                model: "=", // by reference; two way data binding
                action: "&" // event
            },
            templateUrl: "../tpl/dctv-tpl.html",
            link: function (scope, el, attrs, ctrl) {
                el.on('mouseenter', function () {
                    el.css({
                        background: "silver"
                    })
                });
                el.on('mouseleave', function () {
                    el.css({
                        background: "white"
                    })
                });
                el.on('click', function () {
                    console.log('clicked');
                });
            }
        }
    }

    new App();
}