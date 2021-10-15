import React from "react";
import {TextInput} from "./TextInput";

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: ''
        };
        this.naming_strings = {
            'name': 'Имя',
            'contact': 'Контакт для связи'
        }

    }

    handleInputChange(value, name) {
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <TextInput naming_strings={this.naming_strings} name='name' onTextChange={this.handleInputChange} value={this.state.name}/>
        );
    }
}