import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyInput from "../../components/MyInput/MyInput";
import MySelect from "../../components/MySelect/MySelect";
import MyTextArea from "../../components/MyTextArea/MyTextArea";

class Checkout extends Component {
  paymentOptions = [
    { id: "_", name: "____" },
    { id: "pp", name: "PayPal" },
    { id: "stripe", name: "Stripe" },
    { id: "cc", name: "Karta kredytowa" },
  ];

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      street: "",
      zip: "",
      city: "",
      paymentType: "",
      comment: "",
      gift: false,
      errors: {
        firstnameError: "",
        lastnameError: "",
        streetError: "",
        zipError: "",
        cityError: "",
        paymentTypeError: "",
        commentError: "",
        giftError: "",
      },
    };
  }

  changeHandler = (event) => {
    let inputName = event.target.name;
    let inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [inputName]: inputValue,
    }));

    if (inputName === "firstname") {
      if (inputName.length < 2) {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            firstnameError: "Imię powinno mieć co najmniej 2 znaki",
          },
        }));
      } else {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            firstnameError: "",
          },
        }));
      }
    }
  };

  render() {
    return (
      <Container>
        <form>
          <div className="form-group">
            <Row>
              <Col xs={12}>
                <h1>Witamy przy kasie!</h1>
                <h2>Podaj dane do wysyłki:</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <MyInput
                  type="text"
                  name="firstname"
                  label="Imię"
                  className="form-control"
                  value={this.state.firstname}
                  onChange={this.changeHandler}
                  error={this.state.errors.firstnameError}
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  type="text"
                  name="lastname"
                  label="Nazwisko"
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.changeHandler}
                  error={this.state.errors.lastnameError}
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  type="text"
                  name="street"
                  label="Ulica i nr domu"
                  className="form-control"
                  value={this.state.street}
                  onChange={this.changeHandler}
                  error={this.state.errors.streetError}
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  type="text"
                  name="zip"
                  label="Kod pocztowy"
                  className="form-control"
                  value={this.state.zip}
                  onChange={this.changeHandler}
                  error={this.state.errors.zipError}
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  type="text"
                  name="city"
                  label="Miasto"
                  className="form-control"
                  value={this.state.city}
                  onChange={this.changeHandler}
                  error={this.state.errors.cityError}
                />
              </Col>
              <Col xs={12} md={4}>
                <MySelect
                  name="paymentType"
                  label="Rodzaj płatności"
                  className="form-control"
                  value={this.state.paymentType}
                  onChange={this.changeHandler}
                  options={this.paymentOptions}
                  error={this.state.errors.paymentTypeError}
                />
              </Col>
              <Col xs={12} md={4}>
                <MyTextArea
                  type="text"
                  name="comment"
                  label="Komentarze"
                  className="form-control"
                  value={this.state.comment}
                  onChange={this.changeHandler}
                  error={this.state.errors.commentError}
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  type="checkbox"
                  name="gift"
                  label="Zapakować na prezent?"
                  className="form-control"
                  value={this.state.gift}
                  onChange={this.changeHandler}
                  error={this.state.errors.giftError}
                />
              </Col>
            </Row>
          </div>
        </form>
        <Row>
          <Col>
            <h2>Podane dane:</h2>
            <ul className="list-group">
              <li className="list-group-item">
                Imię:{" "}
                {this.state.firstname === "" ? "N/A" : this.state.firstname}
              </li>
              <li className="list-group-item">
                Nazwisko:{" "}
                {this.state.lastname === "" ? "N/A" : this.state.lastname}
              </li>
              <li className="list-group-item">
                Ulica i nr domu:{" "}
                {this.state.street === "" ? "N/A" : this.state.street}
              </li>
              <li className="list-group-item">
                Kod pocztowy: {this.state.zip === "" ? "N/A" : this.state.zip}
              </li>
              <li className="list-group-item">
                Miasto: {this.state.city === "" ? "N/A" : this.state.city}
              </li>
              <li className="list-group-item">
                Rodzaj płatności:{" "}
                {this.state.paymentType === "" ? "N/A" : this.state.paymentType}
              </li>
              <li className="list-group-item">
                Dodatkowe komentarze do zamówienia:{" "}
                {this.state.comment === "" ? "N/A" : this.state.comment}
              </li>
              <li className="list-group-item">
                Zapakować na prezent?: {this.state.gift == "" ? "Tak" : "Nie"}
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Checkout;
