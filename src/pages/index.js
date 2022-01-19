import './index.css';
import {
    cardTemplate,
    cardsElement,
    initialCards,
} from '../utils/constants.js'

const addCard = (card) => {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__image').src = card.link;
    cardElement.querySelector('.element__image').alt = card.name;
    cardElement.querySelector('.element__header').textContent = card.name;
    cardElement.querySelector('.element__description').textContent = card.description;
    cardElement.querySelector('.element__price').textContent = card.price;

    cardsElement.prepend(cardElement);
};

//Загружаем карточки на начальную страницу
initialCards.forEach((card) => {
    addCard(card);
})


