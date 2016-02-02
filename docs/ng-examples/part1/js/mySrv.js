angular
    .module('app.mySrv', [])
    .service('mySrv', function () {
        return {
            value: "welcome in service",
            doSomething: function () {
                alert('something done');
            }
        }
    });