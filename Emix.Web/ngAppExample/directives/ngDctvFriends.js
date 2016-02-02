angular.module('exampleApp')
    .controller("FriendsCtrl", function ($scope, $timeout, $document) {


        $scope.friends = [
            { name: 'John', profession: 'designer' },
            { name: 'Mike', profession: 'front-end developer and designer' },
            { name: 'James', profession: 'back-end and front-end developer' }
        ];

        $scope.action = function (param) {
            alert(angular.toJson(param));
        };


    })
    .directive('myWorker', function () {
        return {
            transclude: false,
            replace: true,
            scope: {
                name: "@", // by value; one way data binding
                //model: "@", // by reference; two way data binding
                //action: "@", // event
                //templateUrl: "ngAppExample/tpl/dctv-friends-tpl.html",
                template: "<input type='text' disabled ng-model='model.name' class='form-control'>" ,

                link: function (scope, el, attrs, ctrl) {

                }
            }

        };


    });