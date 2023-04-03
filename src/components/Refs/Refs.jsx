import React, {Component} from "react"; 
import MyInput from "../form/MyInput";


class Refs extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();

    }

    focus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <MyInput label="Mój przycisk" type="text" ref={this.input} />
                <input type="button" value="Wciśnij mnie!" onClick={this.focus} />
            </div>
        )
    }
}

export default Refs;