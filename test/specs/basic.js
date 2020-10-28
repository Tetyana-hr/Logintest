const validUser = require('../../SecurityData/SecData.js'); 
const Login = require('../pageObjects/Login.page.js');
const login = new Login();
const assert = require('assert');

describe('Tests for client', () => {
    beforeEach(function() {
        browser.url('./');
    });
    it('should have the right title', () => {
        expect(browser).toHaveTitle('Client');
    })

    it('should let you login with valid credentials', function () {
        login.login(validUser);
        browser.pause(10000);
    });

    it('should search value Tanya and Tanya Test', () => {
    let inputSearch = $('#accounts-filter-form input') // locator id, identifier, name, и уточняющие фильтры link, dom, 
                                            // xpath, css, ui 
    inputSearch.addValue('Tanya')  // не очищает предыдущее значение
    browser.pause(5000);
    inputSearch.addValue(' Test') 
    browser.pause(5000);
    
    value = inputSearch.getValue()
    assert(value === 'Tanya Test') // true
 
    });

    // it('should search only Test', function () {
     
    // });

})



