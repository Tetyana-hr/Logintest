const validUser = require('../../SecurityData/SecData.js'); 
const Login = require('../pageObjects/Login.page.js');
const login = new Login();
const assert = require('assert');

describe('Tests for client', () => {
    beforeEach(function() {
        browser.url('./');
        browser.maximizeWindow();
    });
    it('should have the right title', () => {
        expect(browser).toHaveTitle('Client');
    })

    it('should let you login with valid credentials', function () {
        login.login(validUser);
        browser.pause(10000);
    });

     it('should download app from Curtain', function () { 
        const closeCurtain = $('[href="/desktop-app?os=windows"]')  
        browser.pause(4000);
        closeCurtain.click()
        browser.pause(4000);
       });

    xit('should search value Tanya and Tanya Test', () => {
    let inputSearch = $('#accounts-filter-form input') // locator id, identifier, name, и уточняющие фильтры link, dom, 
                                            // xpath, css, ui 
    inputSearch.addValue('Tanya')  // не очищает предыдущее значение
    browser.pause(5000);
    inputSearch.addValue(' Test') 
    browser.pause(5000);
    
    value = inputSearch.getValue()
    assert(value === 'Tanya Test') // true
 
    });

    xit('should search only Test', () => { 
     const inputSearchSet = $('#accounts-filter-form input') 
     inputSearchSet.setValue('Test') // перед добавлением чего-то очищает поле
     browser.pause(5000);
    });

// Вытягиваем атрибут, выводим в консоль значение

    xit('should get placeholder attribute', () => { 
        const inputSearch = $('#accounts-filter-form input') 
        let attr = inputSearch.getAttribute('placeholder')
        console.log("Placeholder attribute is: " + attr) // outputs: Rechercher...

        inputSearch.setValue('Tanya Test');
        attr = inputSearch.getAttribute('value')
        console.log("Value attribute is: " + attr) // outputs: Tanya Test
 
    browser.pause(5000);
   });

   // узнаем координаты елемента
  
   xit('should get Logo Location', () => { 
    const logo = $('[src="/profile/logo"]');
    const location = logo.getLocation();
    console.log(location);
    
    const xLocation = logo.getLocation('x')
    console.log("Logo xLocation = " + xLocation);
   });

     // выведем текст елемента
     it('should get user name', () => { 
        const userName = $('[class="user-display-name"]');
        console.log("User Name is: " + userName.getText());
        
       });


})



