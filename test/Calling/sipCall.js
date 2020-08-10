class sipCall {
    // get $email () { return $('input[name="username"]'); }
    
    get $numpad () { return $('div[id="numpad"]'); }
    get $phone () { return $('input[type="tel"]'); }
    get $call () { return $('div[class="keypad-button"]'); }
    // get $callEnd () { return $('button[title="Hangup"]'); }
    
    call ({ phone }) {
        this.$numpad.click();
        this.$phone.setValue(phone);
        this.$call.click();   
        // browser.pause(5000);
        // this.$callEnd.click();   
     }
}

module.exports = sipCall;