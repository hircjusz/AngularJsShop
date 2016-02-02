var Helpers = require('./../helpers');

describe('product page', function () {

    var helpers = new Helpers();

    it('should display product link and go to products list after click it', function () {
        helpers.get('shops/shop1');
        expect(browser.getCurrentUrl()).toContain('shop1');
        var btnProducts = element(by.css('.products-list'));
        expect(btnProducts.isDisplayed()).toBe(true);
        expect(btnProducts.getText()).toBe('nasze produkty');
        btnProducts.click();

        browser.wait(function () {
            return browser.getCurrentUrl().then(function (url) {
                return /items/.test(url);
            });
        }, helpers.timeOut, 'It\'s taking too long to load url !');

        expect(browser.getCurrentUrl()).toContain('items');
    })

});