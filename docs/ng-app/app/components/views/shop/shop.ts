/// <reference path="../../../../typings/tsd.d.ts" />

module app.views {
    export class ShopCtrl {
        constructor($scope, $state, $http, CONFIG) {
            $scope.$on('mapInitialized', function (evt, evtMap) {

                $http
                    .get(CONFIG.API_PREFIX + $state.params.id + '.json')
                    .success(function (responseData) {
                        $scope.shopName = responseData.data.name;
                        $scope.data = responseData.data;
                        $scope.map.setZoom(6);
                        $scope.map.setOptions({
                            draggable: false,
                            zoomControl: true,
                            scrollwheel: true,
                            disableDoubleClickZoom: true
                        });
                        setMarker($scope.data);
                    });

            });

            function setMarker(data) {
                var marker = new google.maps.Marker();
                $scope.$on("$destroy", function() {
                    marker.setMap(null);
                });
                // długość i szerokość geograficzna
                var lat = data.position.lat;
                var lng = data.position.lng;
                var loc = new google.maps.LatLng(lat, lng);
                marker.setPosition(loc);
                marker.setMap($scope.map);
            }
        }
    }

    angular
        .module('app.view.shop', ['ui.router', 'ui.bootstrap', 'ngMap'])
        .config(function ($stateProvider) {
            $stateProvider
                .state('shops', {
                    url: '/shops',
                    template: '<a ui-sref="shops.item({id: \'shop1\'})">Katowice</a> | ' +
                    '<a ui-sref="shops.item({id: \'shop2\'})">Warszawa</a>' +
                    '<ui-view></ui-view>'
                })
                .state('shops.item', {
                    url: '/:id',
                    templateUrl: "components/views/shop/shop.html",
                    controller: ShopCtrl
                })
        });
}