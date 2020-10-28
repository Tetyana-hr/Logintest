class Login {
    get $email () { return $('input[name="username"]'); }
    get $password () { return $('input[name="password"]'); }
    // get $select () { return $('select[name="lang"'); }
    get $submit () { return $('button[type="submit"'); }
    

    login ({ email, password, select }) {
        this.$email.setValue(email);
        this.$password.setValue(password);
        // this.$select.setValue(select);

        this.$submit.click();
    }
}

module.exports = Login;
