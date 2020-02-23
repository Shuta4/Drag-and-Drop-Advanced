class ContainerArr {
    constructor() {
        this._array = [];
        this.addElement = this.addElement.bind(this);
        this.getClothest = this.getClothest.bind(this);
    }
    addElement(el) {
        this._array.push(el)
    }
    getClothest(x, y){
        var arr = this._array
        var min = null;
        for (var i = 0; i < arr.length; i++) {
            if (i == 0) min = arr[i]
            else {
                var resmin = min.getBoundingClientRect();
                var resarr = arr[i].getBoundingClientRect();
                if(this._calcD(resmin.x, resmin.y, x, y) > this._calcD(resarr.x, resarr.y, x, y)) min = arr[i];
            }
        }
        return min;
    }
    _calcD(x1,y1,x2,y2) {
        return Math.sqrt(Math.pow((x1-x2), 2)+Math.pow((y1-y2), 2))
    }
}

var containerArr = new ContainerArr()

export default containerArr;