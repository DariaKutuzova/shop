export default class Api{
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    // проверка ответа
    _checkResponse(res) {
        if (res.ok){
            return res.json();}
        return Promise.reject('Произошла ошибка')
    }

    //Рендер всех карточек на страницу с сервера
    getAllCards() {
        return fetch(`${this._url}cards/`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkResponse)
    }
    //Добавление карточки из формы
    addCard(data) {
        return fetch(`${this._url}cards/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then(this._checkResponse)
    }
//Сменить аватар
    changeAvatar(data) {
        return fetch(`${this._url}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
            .then(this._checkResponse)
    }
//Имя и работа с сервера в форму
    getApiUserInfo() {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._checkResponse)
    }
//Имя и работа из формы на страницу
    patchUserInfo(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.info
            })
        })
            .then(this._checkResponse)
    }
//Удалить карточку
    deleteCard(id) {
        return fetch(`${this._url}cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._checkResponse)
    }
//Добавить лайк
    addLike(data) {
        return fetch(`${this._url}cards/likes/${data._id}`, {
            method: "PUT",
            headers: this._headers,
        }).then(this._checkResponse)
    }

    //Убрать лайк
    disLike(data) {
        return fetch(`${this._url}cards/likes/${data._id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._checkResponse)
    }

}