// Объявляем переменные
export const buttonChangeProfile = document.querySelector('.profile__edit-__button');
export const buttonAddPlace = document.querySelector('.profile__add-__button');
export const buttonChangeAvatar = document.querySelector('.profile__avatar-edit');
export const formChangeProfile = document.querySelector('.popup__form_type_prifile');
export const formChangeAvatar = document.querySelector('.popup__form_type_avatar');
export const formAddPlace = document.querySelector('.popup__form_type_add');
export const nameInput = document.querySelector('.popup__input_value_name');
export const jobInput = document.querySelector('.popup__input_value_job');
export const cardListSelector = '.elements';
export const popupProfileSelector = '.popup_type_profile';
export const popupAddPlaceSelector = '.popup_type_add-place';
export const popupAvatarSelector = '.popup_type_avatar';
export const popupDeleteImageSelector = '.popup_type_confirm';
export const userNameSelector = '.profile__name';
export const userJobSelector = '.profile__description';
export const userAvatarSelector = '.profile__avatar';
export const popupPhotoSelector = '.popup_type_open-image';

const initialCards = [
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    },
    {
        name: 'Наименование товара',
        description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
        link: '../images/Rectangle.jpg',
        price: '10 000 руб.'
    }
];


