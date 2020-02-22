class Card {
    constructor(text, container) {
        this._text = text;
        this._element = null;
        this._container = container;
    }
    _template() {
        return `<div class="column__item card">
                <p class="card__text">${this._text}</p>
            </div>`
    }
    render() {
        this._container.insertAdjacentHTML('beforeend', this._template());
        var arr = this._container.querySelectorAll('.card');
        this._element = arr[arr.length - 1];
    }
}

export default Card;