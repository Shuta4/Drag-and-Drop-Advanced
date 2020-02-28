import columnArr from "./ColumnArr";

class Card {
    constructor(title, status, estimate, container) {
        this._title = title;
        this._status = status;
        this._estimate = estimate;
        this._element = null;
        this._container = container;
        this._dragging = false;
        this._willDrag = false;
        this.render = this.render.bind(this);
        this._body = document.querySelector("body");
        this.setEventListeners = this.setEventListeners.bind(this);
        this.move = this.move.bind(this);
        this._editing = false;
        this._textFieldsTemplate = this._textFieldsTemplate.bind(this);
        this._editTemplate = this._editTemplate.bind(this);
        this._template = this._template.bind(this);
        this._update = this._update.bind(this);
        this._editHandler = this._editHandler.bind(this);
    }
    _template(template) {
        return `<div class="column__item card card_${this._status}">
            ${template}
            </div>`
    }
    _editTemplate() {
        var selected = '';
        var deadlineSelected = '';
        var normalSelected = '';
        var backlogSelected = '';
        switch (this._status) {
            case 'normal': normalSelected = 'selected';
            break;
            case 'backlog': backlogSelected = 'selected';
            break;
            case 'deadline': deadlineSelected = 'selected';
            break;
            default: selected = 'selected';
            break;
        }
        return `<form class="card__form">
                <input type="text" name="card_title" class="card__form__title" placeholder="Введите название карточки" value="${this._title}"/>
                <select class="card__form__status" name="card_status">
                    <option ${selected} disabled value="">Выберите статус</option>
                    <option ${deadlineSelected} value="deadline">deadline</option>
                    <option ${normalSelected} value="normal">normal</option>
                    <option ${backlogSelected} value="backlog">backlog</option>
                </select>
                <input type="text" name="card_estimate" class="card__form__estimate" placeholder="Введите срок истечения" value="${this._estimate}"/>
                <input type="submit" class="column__form__add-card button" value="Сохранить"/>
            </form>`
    }
    _textFieldsTemplate() {
        return `<p class="card__text">${this._title}</p>
            <p class="card__estimate">${this._estimate}</p>`
    }
    _editHandler() {
        if (!this._editing && !this._dragging) {
            this._editing = true;
            this._willDrag = false;
            this._element.innerHTML = this._editTemplate();
            var form = this._element.querySelector('form');
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                if(form.card_title.value && form.card_status.value) {
                    var params = {
                        title: form.card_title.value,
                        status: form.card_status.value,
                        estimate: form.card_estimate.value
                    }
                    this._update(params); 
                }
                else alert('Введите название и статус карточки!');
            });
        }
    }
    _update(newParams) {
        var old = {
            title: this._title,
            status: this._status,
            estimate: this._estimate
        };
        this._title = newParams.title;
        this._status = newParams.status;
        this._estimate = newParams.estimate;
        this._element.classList.toggle('card_' + old.status);
        this._element.classList.toggle('card_' + this._status);
        this._element.innerHTML = this._textFieldsTemplate();
        this._editing = false;
    }
    render() {
        this._container.insertAdjacentHTML('beforeend', this._template(this._textFieldsTemplate()));
        var arr = this._container.querySelectorAll('.card');
        this._element = arr[arr.length - 1];
        this.setEventListeners();
        return this._element;
    }
    move(container) {
        this._container = container;
        this._element.remove();
        this.render()
    }
    setEventListeners() {
        this._body.addEventListener('mousemove', (event) => {
            if(this._willDrag && !this._editing) {
                this._dragging = true;
                this._element.style.position = "absolute"
            }
            if(this._dragging) { 
                this._willDrag = false;
                var mousePos = {
                    X: event.pageX,
                    Y: event.pageY
                }
                var topOffset = this._element.offsetHeight / 2;
                var leftOffset = this._element.offsetWidth / 2;
                var left = mousePos.X - leftOffset;
                var top = mousePos.Y - topOffset;
                this._element.style.top = top + 'px';
                this._element.style.left = left + 'px';
            }
        })
        this._element.addEventListener('mousedown', () => {
            if(!this._editing) this._willDrag = true;
        });
        this._element.addEventListener('click', this._editHandler);
        this._body.addEventListener('mouseup', () => {
            if(this._dragging && !this._editing) {
                this._dragging = false;
                var newContainer = columnArr.getClothest(this._element.getBoundingClientRect().x, this._element.getBoundingClientRect().y).querySelector(".column__items");
                this.move(newContainer)
            }
        });
    }
}

export default Card;