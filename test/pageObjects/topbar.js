class TopBar{
    get inputSearch(){return $('#accounts-filter-form input')}

    inputSearchSet(value){
        this.inputSearch.setValue(value) // перед добавлением чего-то очищает поле
    }
}
module.exports = new TopBar()