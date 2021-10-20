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
        this.setState({
            exposed: true
        });
    }

    render() {
        let values;
        if (this.state.exposed) {
            values = Object.keys(this.naming_strings).map((name) => <div className='content'>{this.naming_strings[name]}: {this.state[name]}</div>)
                }
        return (
            <form className='container'>
                <label className='content'>
                    {this.naming_strings['name']}:
                    <TextInput name='name' onTextChange={this.handleInputChange} value={this.state.name}/>
                </label>
                <label className='content' >
                    {this.naming_strings['contact']}:
                    <TextInput name='contact' onTextChange={this.handleInputChange} value={this.state.contact}/>
                </label>
                <label className='content'>
                    <input type="button" value="Показать введенные данные" onClick={this.handleClick}/>
                </label>
                {values}
            </form>
        );
    }
}