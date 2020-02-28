import Card from './Card';

class CardArr {
    constructor() {
        this._array = [];
        this.addElement = this.addElement.bind(this);
        this.renderAll = this.renderAll.bind(this);
    }
    addElement(el) {
        this._array.push(el);
    }
    renderAll() {
        this._array.forEach(el => {
            el.render();
        });
    }
}

var cardArr = new CardArr();
export default cardArr;