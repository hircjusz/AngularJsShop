/// <reference path="../../../../typings/tsd.d.ts" />

module app.views {
    export class Faq {
        constructor($scope, $http, CONFIG) {
            $http.get(CONFIG.API_PREFIX + 'faq.json')
                .success(function (data) {
                    $scope.items = data.responseData.feed.entries;
                    $scope.currentPage = 1;
                    $scope.itemsPerPage = 10;
                    $scope.maxSize = 5;
                });
        }
    }

    angular
        .module('app.view.faq', ['ui.router', 'ngSanitize', 'app.dropDownDctv'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('faq', {
                    url: '/faq',
                    templateUrl: 'components/views/faq/faq.html',
                    controller: Faq
                });
        })
}