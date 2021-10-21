import React from "react";

export class OutputSection extends React.Component {
    render() {
        return (
            (this.props.exposed) &&
            <div className='sub_container'>
                <div className='content'>Имя: {this.props.name}</div>
                <div className='content'>Контакт для связи: {this.props.contact}</div>
            </div>
        );
    }
}