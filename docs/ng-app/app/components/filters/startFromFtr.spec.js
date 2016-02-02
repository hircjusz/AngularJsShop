describe('startFromFtr', function () {

    beforeEach(module('app.startFromFtr'));

    it('should return proper part of array', inject(function (startFromFtrFilter) {
        expect(startFromFtrFilter([1, 2, 3, 4, 5, 6], 3, 2)).toEqual([5, 6]);
    }));

});