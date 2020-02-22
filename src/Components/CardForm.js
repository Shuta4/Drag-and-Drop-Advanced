import Column from './Column'

class CardForm {
    constructor(form) {
        this._form = document.querySelector(form);
        this.setEventListeners = this.setEventListeners.bind(this);
        this._submitHandler = this._submitHandler.bind(this);
    }
    _submitHandler(event) {
        event.preventDefault()
        if(this._form.column_title.value) {
            var column = new Column(this._form.column_title.value, '.content__list');
            column.render();
        } else alert("Введите название колонки!");
    }
    setEventListeners() {
        this._form.addEventListener('submit', this._submitHandler);
    }
}

export default CardForm;