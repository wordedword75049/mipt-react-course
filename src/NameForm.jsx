import React from "react";
import {InputSection} from "./InputSection";
import {OutputSection} from "./OutputSection";

export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            exposed: false,
        };
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
        return (
            <form className='container'>
                <InputSection name={this.state.name} contact={this.state.contact} onTextInput={this.handleInputChange}/>
                <label className='content'>
                    <input type="button" value="Показать введенные данные" onClick={this.handleClick}/>
                </label>
                <OutputSection exposed={this.state.exposed} name={this.state.name} contact={this.state.contact}/>
            </form>
        );
    }
}