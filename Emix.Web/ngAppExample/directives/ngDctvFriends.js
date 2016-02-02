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


    }).
    controller('StudentListCtrl', function ($scope) {

        var students = [{ name: 'Mary Contrary', id: '1' },
{ name: 'Jack Sprat', id: '2' },
{ name: 'Jill Hill', id: '3' }];

        $scope.students = students;
        $scope.insertTom = function () {
            $scope.students.splice(1, 0, { name: 'Tom Thumb', id: '4' });
        };
    }).
    controller('FormStartupController', function ($scope) {
        $scope.funding = { startingEstimate: 0 };
        $scope.computeNeeded = function () {
            $scope.needed = $scope.funding.startingEstimate * 10;
        };
        $scope.requestFunding = function () {
            window.alert("Sorry, please get more customers first.");
        };
        $scope.reset = function() {
            $scope.funding.startingEstimate = 0;
        }
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
            template: "<input type='text' disabled ng-model='model.name' class='form-control'>",

            link: function (scope, el, attrs, ctrl) {

            }
        }

    };


});