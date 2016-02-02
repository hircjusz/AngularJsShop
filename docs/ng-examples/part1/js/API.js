angular
    .module('app.API', [])

    .service('API', function ($q, $timeout) {
        this.getAsyncData = function () {
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve("data from API");
            }, 1000);
            return deferred.promise;
        }
    });