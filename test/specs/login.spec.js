const Login = require('../pageObjects/Login.page.js');
const login = new Login();


const validUser = {
    email: '',
    password: '',
  
};

describe('Login Page', function () {
    beforeEach(function() {
        browser.url('./');
    });
    it('should let you login with valid credentials', function () {
        login.login(validUser);
    });
})
