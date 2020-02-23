import containerArr from "./ColumnArr";
import cardArr from './CardArr'

class Card {
    constructor(title, status, estimate, container) {
        this._title = title;
        this._status = status;
        this._estimate = estimate;
        this._element = null;
        this._container = container;
        this._dragging = false;
        this.render = this.render.bind(this);
        this._body = document.querySelector("body");
        this.setEventListeners = this.setEventListeners.bind(this);
        this.move = this.move.bind(this);
    }
    _template() {
        return `<div class="column__item card ${this._status}">
                <p class="card__text">${this._title}</p>
                <p class="card__estimate">${this._estimate}</p>
            </div>`
    }
    render() {
        this._container.insertAdjacentHTML('beforeend', this._template());
        var arr = this._container.querySelectorAll('.card');
        this._element = arr[arr.length - 1];
        this.setEventListeners();
        cardArr.addElement(this._element);
    }
    move(container) {
        this._container = container;
        this._element.remove();
        this.render()
    }
    setEventListeners() {
        this._body.addEventListener('mousemove', (event) => {
            if(this._dragging) {
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
            this._dragging = true;
            this._element.style.position = "absolute"
        });
        this._body.addEventListener('mouseup', () => {
            if(this._dragging) {
                this._dragging = false;
                var newContainer = containerArr.getClothest(this._element.getBoundingClientRect().x, this._element.getBoundingClientRect().y).querySelector(".column__items");
                this.move(newContainer)
            }
        });
    }
}

export default Card;