import React from "react";

export class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTextChange(e.target.value, e.target.name);
    }

    render() {
        const text = this.props.value;
        const name = this.props.name;
        return (
            <label>
                {this.props.naming_strings[name]}
            <input type="text" name={name} value={text} onChange={this.handleChange}/>
            </label>
        );
    }
}