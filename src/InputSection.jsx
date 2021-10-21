import React from "react";
import {TextInput} from "./TextInput";

export class InputSection extends React.Component {

    render() {
        return (
            <div className='sub_container'>
                <label className='content'>
                    Имя:
                    <TextInput name='name' onTextChange={this.props.onTextInput} value={this.props.name}/>
                </label>
                <label className='content'>
                    Контакт для связи:
                    <TextInput name='contact' onTextChange={this.props.onTextInput} value={this.props.contact}/>
                </label>
            </div>
        );
    }
}