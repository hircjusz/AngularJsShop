describe('ProductListCtrl', function () {
    var scope,
        httpBackend,
        vm,
        $state,
        responseData = {status: "OK", data: [1, 2, 3]};

    beforeEach(module('app', function ($provide) {
        $provide.service('userStorage', function () {
            return {
                checkUser: function () {
                }
            }
        })
    }));

    beforeEach(module('template-module'));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, CONFIG, _$state_) {
        httpBackend = _$httpBackend_;
        httpBackend.expectGET(CONFIG.API_PREFIX + 'items').respond(responseData);
        scope = $rootScope.$new();
        $state = _$state_;
        vm = $controller(app.views.ItemsCtrl, {$scope: scope});
    }));

    it('should respond to URL', function () {
        expect($state.href('items')).toEqual('#/items');
    });

    it('should fetch products list', function () {
        expect(vm.itemStorage.items).toBeUndefined();
        httpBackend.flush();
        expect(vm.itemStorage.items).toEqual(responseData.data);
    });
});
