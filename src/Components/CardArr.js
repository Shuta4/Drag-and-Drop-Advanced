class CardArr {
    constructor() {
        this._array = [];
        this.addElement = this.addElement.bind(this);
    }
    addElement(el) {
        this._array.push(el);
    }
}

var cardArr = new CardArr();
export default cardArr;