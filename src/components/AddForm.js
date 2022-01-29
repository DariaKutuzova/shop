export default class AddForm {
    constructor(formSelector, {submit}) {
        this._formSelector = formSelector;
        this._form = document.querySelector(this._formSelector);
        this._submit = submit;
        this._submitEvtHandler = this._submitEvtHandler.bind(this);
        this._submitButton = this._form.querySelector('.add-form__button');
        this._valueSubmitButton = this._submitButton.textContent;
        this._inputs = Array.from(this._form.querySelectorAll('.add-form__input'));
    }

    setEventListeners() {
        this._form.addEventListener('submit', this._submitEvtHandler);
    }
//Собирает данные из инпутов
    _getInputValues() {
        const formValues = {};
        this._inputs.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }
//События при сабмите
    _submitEvtHandler(evt) {
        evt.preventDefault();
        this._submit(this._getInputValues());
    }
    //Изменение кнопки при сохранении данных
    loading(isLoading){
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = this._valueSubmitButton;
        }

    }

}