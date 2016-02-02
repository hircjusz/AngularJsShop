// required: factory, controller, run

var app = angular.module('app', []);

app.run(function ($rootScope) {
    $rootScope.$on('order:created', function (event, order) { // event może zostać odebrany w dowolnej częsci aplikacji
        console.log(order.product, order.email)
    });
});

app.factory('Order', function () {
    return function (email, product) {
        this.email = email;
        this.product = product
    }
});

app.controller('MainCtrl', function ($scope, Order, $rootScope) {
    $scope.orders = [];
    $scope.newOrder = function (product) {
        if ($scope.email) {
            var order = new Order($scope.email, product);
            this.orders.push(order);
            $scope.$emit('order:created', order); // emisja eventu
        } else {
            alert('invalid email')
        }
    }
});

app.controller('SecondCtrl', function ($scope, $rootScope) {
    $rootScope.$on('order:created', function (event, order) { // event może zostać odebrany w dowolnej częsci aplikacji
        $scope.order = order;
    });
});
