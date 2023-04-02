import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        
    }

    increase = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    decrease = () => {
        this.setState((prevState) => ({
            counter: prevState.counter -1
        }));
    }

    clear = () => {
        this.setState({
            counter: 0
        })
    }

    setValue = value => {
        this.setState({
            counter: value
        })
    }

    render() {
        return (
            <div>
                Stan licznika: {this.state.counter}
                <br />
                <button onClick={this.increase}>Zwiększ o jeden</button>
                <br />
                <button onClick={this.decrease}>Zmniejsz o jeden</button>
                <br />
                <button onClick={this.clear}>Zeruj</button>
                <br />
                <button onClick={this.setValue(20)}>Podaj wartość</button>
            </div>
        )
    }
}

export default Counter;
