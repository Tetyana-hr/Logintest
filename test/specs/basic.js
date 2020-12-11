const validUser = require('../../SecurityData/SecData.js');
const Login = require('../pageObjects/Login.page.js');
const login = new Login();
const assert = require('assert');

describe('Tests for client', () => {
    beforeEach(function () {
        browser.url('./');
        browser.maximizeWindow();
    });
    xit('should have the right title', () => {
        expect(browser).toHaveTitle('Client');
    })

    it('should let you login with valid credentials', function () {
        login.login(validUser);
        browser.pause(10000);
    });

    xit('should download app from Curtain', function () {
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
    xit('should get user name', () => {
        const userName = $('[class="user-display-name"]');
        console.log("User Name is: " + userName.getText());

    });

           // User status is clickable
           xit('should detect if an element is clickable', () => { 
            const userStatus = $('[class="status-select dropdown-toggle"]');
            let clickable = userStatus.isClickable();
            console.log("Is clickable? " + clickable); //true or false
            
           });

           xit('should detect if an element is displayed', () => { 
            const userStatus = $('[class="status-select dropdown-toggle"]');
            let isDisplayed = userStatus.isDisplayed();
            console.log("Is displayed? " + isDisplayed);
                        
           });

           //ВИдимость елементов, True если в полевидимости. False если надо скролить старницу, тоесть не в поле видимости. 
           xit('should detect if an element is visible', () => { 
            const buttonAddUser = $('[class="mobile-hidden tablet-hidden"]');
            let isVisibleButtonAddUser = buttonAddUser.isDisplayedInViewport();
            console.log("Is visible? " + isVisibleButtonAddUser);

            const queuesSwitch =$('#queues label');
            let isVisibleWithoutScroll = queuesSwitch.isDisplayedInViewport();
            console.log("Is visible withot scrolling? " + isVisibleWithoutScroll);

            const queuesThreeDots =$('#queues [class="btn btn-icon"]');
            let isVisibleThreeDots = queuesThreeDots.isDisplayedInViewport();
            console.log("Is ThreeDots visible withot scrolling? " + isVisibleThreeDots);
                        
           });
// Включен/отключен/сфокусирован елемент - РОБОЧИЙ, НО ПЛОХОЙ ПРИМЕР
           xit('should detect if an element is enabled and focused', () => { 
            const openChat = $('[data-page="chat"]');

            
            browser.pause(4000);
            openChat.click();
            browser.pause(4000);
            const inputChat = $('#chat-textarea');
            let isEnabled = inputChat.isEnabled();
            console.log("Is enabled? " + isEnabled); // Выведет true, так как в коде нет Disabled
            console.log("Is focused? " + inputChat.isFocused()) // outputs false
            let chanal = $('[class="chat-list-item"]');
            chanal.click();
            browser.pause(4000)
            console.log("Is focused? " + inputChat.isFocused()) // outputs true
            browser.pause(4000)
           }); 

           // Проскролить страницу

           xit('should move to element', () => { 
            const blockQueues = $('#queues');
            browser.pause(4000);
            blockQueues.scrollIntoView();
            browser.waitUntil(() =>
                $('#queues').isDisplayed() === true,
                { timeout: 5000, timeoutMsg: "Waiting Error", interval: 500 });
            // browser.pause(4000);
        }); 
        
        xit('shoud save a screenShot of the browser view', function (){
            const blockQueues = $('#queues');
            blockQueues.saveScreenshot('screenshot.png');
        });

        it ('shoud switch to another wondow for centrex opening', () => {
            browser.newWindow('https://centrex-test2.netw.fr')
            browser.pause(2000);

            //switch back via url match
            browser.switchWindow('https://client2.netw.fr/')
            browser.pause(2000);

            //or switch back via title mach
            browser.switchWindow('Client')
            browser.pause(2000);
 
        })

})



