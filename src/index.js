import "./style.css";
import CardForm from './Components/CardForm';
import cardArr from './Components/CardArr';
import columnArr from './Components/ColumnArr';
import Column from "./Components/Column";
import Card from './Components/Card'


var arrCol = [
    {
        title: "TODO",
        container: ".content__list"
    },
    {
        title: "In progress",
        container: ".content__list"
    },
    {
        title: "Done",
        container: ".content__list"
    }
]
arrCol.forEach(el => {
    var col = new Column(el.title, el.container);
    columnArr.addElement(col)
});
columnArr.renderAll();
var arrCard = [
    {
        title: "Поесть", 
        status: "normal", 
        estimate: "10.04.20", 
        container: columnArr.getElementById(0).getElement().querySelector('.column__items')
    },
    {
        title: "Попить", 
        status: "deadline", 
        estimate: "10.04.20", 
        container: columnArr.getElementById(0).getElement().querySelector('.column__items')
    },
    {
        title: "Сварить пельмешей", 
        status: "deadline", 
        estimate: "10.04.20", 
        container: columnArr.getElementById(2).getElement().querySelector('.column__items')
    },
    {
        title: "Заварить кофе", 
        status: "normal", 
        estimate: "10.04.20", 
        container: columnArr.getElementById(2).getElement().querySelector('.column__items')
    },
    {
        title: "Выучить russian)", 
        status: "backlog", 
        estimate: "10.04.20", 
        container: columnArr.getElementById(1).getElement().querySelector('.column__items')
    },
    {
        title: "Ответить на какие-нибудь философские вопросы", 
        status: "backlog", 
        estimate: "10.04.60", 
        container: columnArr.getElementById(1).getElement().querySelector('.column__items')
    }
]
arrCard.forEach(el => {
    var card = new Card(el.title, el.status, el.estimate, el.container);
    cardArr.addElement(card)
});
cardArr.renderAll();

var cardForm = new CardForm(".main-header__control__form");
cardForm.setEventListeners();
