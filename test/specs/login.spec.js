const Login = require('../pageObjects/Login.page.js');
const login = new Login();
const SipCall = require('../Calling/sipCall.js');
const sipCall = new SipCall();


// Move assert, expect, should to wdio.conf.js

const validUser = {
    email: 'thrivas@netw.fr',
    password: 'Qw123456',
  
};

const callPhone = {
    phone: '33970758487',
};

describe('Login Page and calling', function () {
    beforeEach(function() {
        browser.url('./');
    });
    it('should let you login with valid credentials', function () {
        login.login(validUser);
        browser.pause(10000);
        
    });

    it('should be title Client', function () {
        let title = browser.getTitle();
        assert.equal(title, 'Client'); // the same
        expect(title).to.equal('Client'); // the same
        title.should.equal('Client'); // the same
        console.log('Title is: ' + title);
        browser.pause(10000);
    });
  
        
    //     it('Make a call', function(){
    //     sipCall.call(callPhone);            
    //     browser.pause(10000);
       
    // });

})
