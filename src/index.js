import "./style.css";
import CardForm from './Components/CardForm';
import cardArr from './Components/CardArr';

var arr = []
arr.forEach(element => {
    cardArr.addElement(element)
});

var cardForm = new CardForm(".content__control__form");
cardForm.setEventListeners();
