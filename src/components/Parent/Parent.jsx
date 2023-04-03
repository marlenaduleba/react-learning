import { Component } from "react";

class Parent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <ChildComponent></ChildComponent>
            </div>
        )
    }
}