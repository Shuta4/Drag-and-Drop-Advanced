class CardForm {
    constructor(form) {
        this._form = document.querySelector(form);
        this.setEventListeners = this.setEventListeners.bind(this);
        this._submitHandler = this._submitHandler.bind(this);
    }
    _submitHandler() {
        if(this._form.title.value) {
            
        } else alert("Введите название колонки!")
    }
    setEventListeners() {

    }
}