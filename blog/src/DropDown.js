import React, {Component} from 'react';

class DropDown extends Component {
    constructor(props){ //Переопределяем конструктор
        super(props); //Метод, который позволяет переопределить конструктор

        this.state = {isOpened: false}; //Создаем новую переменную isOpened в state и инициализировали её false
    }

    toggleState () { //Вызывается ниже без круглых скобок. Если их поставить, то она вызовется при инициализации
        this.setState({isOpened: !this.state.isOpened}) //setState стейтит isOpened в "не this.state.isOpened"
    }

    render () {

        let dropDownText;

        if(this.state.isOpened){
            dropDownText = <div>Here is what is show in dropdown</div>;
        }

        return (
            <div onClick={this.toggleState.bind(this)}>
                It's dropdown!
                {dropDownText}
            </div>
        ); //без this функция вызывается вне контекста класса
    }
}

export default DropDown;