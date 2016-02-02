var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function ($scope, $timeout) {
    $scope.drinks = [
        {ctrlFlavor: "jeżyna", ctrlOdor: "leśny"},
        {ctrlFlavor: "truskawka", ctrlOdor: "truskawkowy"}
    ];

    // jeżeli w scopie (w zmiennych połączonych przez @) nastąpią zmiany będą one emitowane do dyrektyw
    var index = 0;
    setInterval(function () {
        $scope.drinks[0].ctrlFlavor += ++index + " ";
        $scope.$digest(); // wywołanie digest() jest potrzebne ponieważ używany metody setInterval która nie pochodzi z angulara.
    }, 1000)
});

app.directive("drink", function () {
    return {
        scope: {
            flavor: "@", // przekazanie wartości - one way data binding
            odor: "@" // przekazanie wartości - one way data binding
        },
        template: '<div style=" border: solid; margin: 20px" class="col-md-4">\n  <h5>ciało dyrektywy</h5>\n  <div>smak: {{flavor}}</div>\n  <div>zapach: {{odor}}</div>\n</div>',
        link: function (scope, el, attrs, controller) {

        }
    }
});

app.directive("color", function () {
    return {
        restrict: "A",
        link: function (scope, el, attrs, ctrl) {
            console.log(attrs.color)
            angular.element(el.find('div')[0]).css({border: "solid 10px " + attrs.color})
        }
    }
});