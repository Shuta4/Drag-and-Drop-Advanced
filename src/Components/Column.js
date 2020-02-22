class Column {
    constructor() {
        
    }
    _template(title) {
        return `<div className="column">
                <p className="title">${title}</p>
                <form className="column__form">
                    <input type="text" className="column__form__card-title" placeholder="Введите название карточки" />
                    <input type="text" className="column__form__add-card" value="Добавить карточку"/>
                </form>
                <ul className="column__items"></ul>
            </div>`;
    }
    render() {

    }
}

