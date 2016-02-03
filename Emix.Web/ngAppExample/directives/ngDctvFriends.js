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
    .directive('mySharedScope', function () {
        return {
            template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'
        };
    })
        .directive('myWorker', function () {
    return {
        transclude: false,
        replace: true,
        scope: {
            name: "@", // by value; one way data binding
            model: "=", // by reference; two way data binding
            action: "&", // event
        },
            templateUrl: "/ngAppExample/tpl/dctv-friends-tpl.html",
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
        })
.directive('inputDctv', function () {
    return {
        transclude: true,
        scope: {
            model: "="
        },
        template: '<div ng-form="inputDctv">' +
                    '<div ng-transclude></div>' +
                    '<div class="input-content"></div>' +
                    '<small ng-show="inputDctv.$invalid">pole wymagane</small>' +
                    '</div>',
        compile: function (el, attrs) {
            var tpl = attrs.type === 'multiline'
                    ? angular.element('<textarea>').attr('rows', 4)
                    : angular.element('<input>').attr('type', attrs.type || 'text');

            tpl.attr({
                'required': attrs.required,
                'ng-minlength': attrs.minlength || 3,
                'ng-model': 'model'
            });

            tpl.addClass('form-control');

            var inputContent = el[0].querySelector(".input-content");
            angular.element(inputContent).append(tpl);

            return {
                pre: function () {
                },
                post: function (scope, el) {
                    el.find('small').css({ color: 'coral' });
                }
            }
        }
    }
});
;