class Login {
    get $email () { return $('input[name="username"]'); }
    get $password () { return $('input[name="password"]'); }
    get $submit () { return $('button[type="submit"'); }
    

    login ({ email, password }) {
        this.$email.setValue(email);
        this.$password.setValue(password);
  
        this.$submit.click();
    }
}

module.exports = Login;
