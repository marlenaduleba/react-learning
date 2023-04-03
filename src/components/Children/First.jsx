import { Component } from "react";

class First extends Component {
  render() {
    return (
      <div>
        <h1>Wiadomość należąca do pierwszego elementu</h1>
        {this.props.children}
      </div>
    );
  }
}

export default First;
