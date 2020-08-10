const Login = require('../pageObjects/Login.page.js');
const login = new Login();
const SipCall = require('../Calling/sipCall.js');
const sipCall = new SipCall();

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

  
        // this.timeout(30000);
        it('Make a call', function(){
        sipCall.call(callPhone);            
        browser.pause(10000);
       
    });

})
