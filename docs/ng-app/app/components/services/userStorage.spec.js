describe('userStorage access key', function () {

    beforeEach(module('app'));
    beforeEach(inject(function (userStorage, CONFIG) {
        userStorage.setUserAccess(false);
    }));

    it('should be false (dafault)', inject(function (userStorage) {
        expect(userStorage.state.access).toBe(false);
    }));

    it('should be true', inject(function (userStorage) {
        userStorage.setUserAccess(true);
        expect(userStorage.state.access).toBe(true);
    }))

});