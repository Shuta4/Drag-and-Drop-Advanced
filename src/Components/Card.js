class Card {
    constructor(text, container) {
        this._text = text;
        this._element = null;
        this._container = container;
        this._dragging = false;
        this.render = this.render.bind(this);
        this._body = document.querySelector("body");
        this.setEventListeners = this.setEventListeners.bind(this);
        this.move = this.move.bind(this);
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
        this.setEventListeners();
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
                    X: event.clientX,
                    Y: event.clientY
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
            this._dragging = false;
            var newContainer = this._container;
            this.move(newContainer)
        });
    }
}

export default Card;