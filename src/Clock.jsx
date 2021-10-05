import React from 'react';


export class Clock extends React.Component {

    useful_list = [
        {
            start: 0,
            string: "first"
        }, {
            start: 10,
            string: "second"
        }
    ];

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        this.timerId = setInterval((prevState)=>{
            if (this.state.counter < 10) {
            this.setState({
                counter: this.state.counter+1
            })}
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div>
                {this.useful_list.map((thing) => {return <div class="center">This is {thing.string} counter! <h1>{thing.start+this.state.counter}</h1></div>})}
            </div>
        );
    }
}