import React from "react";
import {TextInput} from "./TextInput";

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            exposed: false,
        };
        this.keys = ['name', 'contact'];
        this.naming_strings = {
            name: 'Имя',
            contact: 'Контакт для связи'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handleInputChange(value, name) {
        this.setState({
            [name]: value
        });
    }

    handleClick() {
        if (this.state.exposed === false) {
            this.setState({
                exposed: true
            });
        }
    }

    render() {
        let values;
        if (this.state.exposed) {
            values = this.keys.map((name) => <div>{this.naming_strings[name]}: {this.state[name]}</div>)
                }
        return (
            <form>
            <TextInput naming_strings={this.naming_strings} name='name' onTextChange={this.handleInputChange} value={this.state.name}/>
            <br/>
            <TextInput naming_strings={this.naming_strings} name='contact' onTextChange={this.handleInputChange} value={this.state.contact}/>
            <br/>
            <label><input type="button" value="Показать введенные данные" onClick={this.handleClick}/></label>
                <br/>
                {values}
            </form>
        );
    }
}