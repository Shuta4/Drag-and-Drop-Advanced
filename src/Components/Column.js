import Card from './Card';
import cardArr from './CardArr';
import columnArr from './ColumnArr';

class Column {
    constructor(title, container) {
        this._title = title;
        this._form = null;
        this._container = document.querySelector(container);
        this.render = this.render.bind(this);
        this._submitHandler = this._submitHandler.bind(this);
        this._element = null;
        this._toggleForm= this._toggleForm.bind(this);
    }
    _template() {
        return `<div class="column content__list__column">
                <p class="column__title">${this._title}</p>
                <div class="column__items"></div>
                <form class="column__form">
                    <button type="button" class="button column__form__toggle toggle-button">Добавить карточку</button>
                    <div class="hidden inputs-wrapper column__form__inputs-wrapper">
                        <input type="text" name="card_title" class="column__form__card-title" placeholder="Введите название карточки" />
                        <select class="column__form__card-status" name="card_status">
                            <option disabled selected value="">Выберите статус</option>
                            <option value="deadline">deadline</option>
                            <option value="normal">normal</option>
                            <option value="backlog">backlog</option>
                        </select>
                        <input type="text" name="card_estimate" class="column__form__card-estimate" placeholder="Введите срок истечения" />
                        <input type="submit" class="column__form__add-card button" value="Добавить"/>
                    </div>
                </form>
            </div>`;
    }
    _submitHandler(event) {
        event.preventDefault();
        if(this._form.card_title.value && this._form.card_status.value) {
            var card = new Card(this._form.card_title.value, this._form.card_status.value, this._form.card_estimate.value, this._element.querySelector('.column__items'));
            card.render();
            cardArr.addElement(card);
            this._form.card_title.value = '';
            this._form.card_status.value = '';
            this._form.card_estimate.value = '';
            this._toggleForm();
        }
        else alert("Введите название и статус карточки!")
    }
    _toggleForm() {
        this._form.querySelector('.inputs-wrapper').classList.toggle('hidden')
    }
    render() {
        this._container.insertAdjacentHTML('beforeend', this._template());
        var arr = this._container.querySelectorAll('.column');
        this._element = arr[arr.length -1];
        this._form = this._element.querySelector('.column__form');
        this._form.addEventListener('submit', this._submitHandler);
        this._form.querySelector('.toggle-button').addEventListener('click', this._toggleForm)
        columnArr.addElement(this._element);
        return this._element;
    }
    getElement() {
        return this._element;
    }
}

export default Column;