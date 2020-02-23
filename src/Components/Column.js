import Card from './Card'
import containerArr from './ColumnArr';

class Column {
    constructor(title, container) {
        this._title = title;
        this._form = null;
        this._container = document.querySelector(container);
        this.render = this.render.bind(this);
        this._submitHandler = this._submitHandler.bind(this);
        this._element = null;
    }
    _template() {
        return `<div class="column">
                <p class="column__title">${this._title}</p>
                <form class="column__form">
                    <input type="text" name="card_title" class="column__form__card-title" placeholder="Введите название карточки" />
                    <select class="column__form__card-status" name="card_status">
                        <option disabled>Выберите статус</option>
                        <option value="deadline">deadline</option>
                        <option selected value="normal">normal</option>
                        <option value="backlog">backlog</option>
                    </select>
                    <input type="text" name="card_estimate" class="column__form__card-estimate" placeholder="Введите срок истечения" />
                    <input type="submit" class="column__form__add-card button" value="+"/>
                </form>
                <div class="column__items"></div>
            </div>`;
    }
    _submitHandler(event) {
        event.preventDefault();
        if(this._form.card_title.value) {
            var card = new Card(this._form.card_title.value, this._form.card_status.value, this._form.card_estimate.value, this._element.querySelector('.column__items'));
            card.render();
        }
        else alert("Введите название карточки!")
    }
    render() {
        this._container.insertAdjacentHTML('beforeend', this._template());
        var arr = this._container.querySelectorAll('.column');
        this._element = arr[arr.length -1];
        this._form = this._element.querySelector('.column__form');
        this._form.addEventListener('submit', this._submitHandler)
        containerArr.addElement(this._element);
    }
}

export default Column;