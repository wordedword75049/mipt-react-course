import React from 'react';


export class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.state.counter < 10) {
                this.setState((prevState) => {
                    return {counter: prevState.counter + 1}
                })
            }
            else {
                clearInterval(this.timerId);
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                <div className="center">
                    This is {this.props.caption} counter!
                    <h1>{this.props.start+this.state.counter}</h1>
                </div>
            </div>
        );
    }
}