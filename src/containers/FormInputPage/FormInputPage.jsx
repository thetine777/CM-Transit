import React, { Component } from "react";
import Button from "components/CustomButton/CustomButton.jsx";
import {
  Grid,
  Col,
  Row,
  ControlLabel,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import * as firebase from 'firebase'

// react component used to create charts

// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";

class FormInputPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 10,
      password: '',
      messages: []
    }
  }
  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    rootRef.on('value', snap => {
      const messageObj = snap.val();
      const messageArray = Object.entries(messageObj).map(([key, value]) => {
        return {
          id: key,
          name: value.name,
          receive: value.receive,
          delivery: value.delivery
        }
      })
      this.setState({
        messages: messageArray
      });
    });
  }
  //add Data
  addMessage = (e) => {
    // console.log(this.state.password);
    e.preventDefault();
    var dataInfo = {
      name: this.state.name,
      receive: this.state.receive,
      delivery: this.state.delivery,
      status: 'enabled'
    }
    // console.log(dataInfo)
    firebase.database().ref('react').push(dataInfo);

    this.clearValue();
  }
  addDriver = (e) => {
    console.log(e);
    e.preventDefault();
    var dataDriver = {
      name: this.state.name,
      surname: this.state.surname
    }
    console.log(dataDriver);
    firebase.database().ref('driver').push(dataDriver);
  }
  deleteMessage = (id) => {
    firebase.database().ref().child('react/' + id).remove();
  }
  addContact = (e) => {
    // console.log(this.state.password);
    e.preventDefault();
    var dataContact = {
      company: this.state.company,
      tel: this.state.tel,
    }
    // console.log(dataInfo)
    firebase.database().ref('contact').push(dataContact);

    this.clearValue();
  }
  addImage = (e) => {
    e.preventDefault();
    var image = this.state.image
    firebase.database().ref('').push(image);
  }
  //-----------------------------------------------------------------
  clearValue = () => {
    this.state.name = '',
      this.state.receive = '',
      this.state.delivery = ''
  }

  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={6}>
              <Card
                title="Result"
                icon="pe-7s-stopwatch"
                // category="All products that were shipped"
                content={
                  this.state.messages.map(data => {
                    return (
                      <h3>
                        <p>{data.name}</p>
                        <p>{data.receive}</p>
                        <p>{data.delivery}</p>
                        <Button
                          onClick={() => this.deleteMessage(data.id)}
                          bsStyle="danger"
                          fill
                          wd
                        >
                          delete
                        </Button>
                      </h3>
                    )
                  })
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Input Form"
                icon="pe-7s-stopwatch"
                // category="All products that were shipped"
                content={
                  <div>
                    <form onSubmit={this.addMessage}>
                      {/* <FormGroup>
                        <ControlLabel>Email address</ControlLabel>
                        <FormControl placeholder="Enter email" type="email" name="email" ref={el => this.inputEl = el} />
                      </FormGroup> */}
                      <FormGroup>
                        <ControlLabel>name</ControlLabel>
                        <FormControl placeholder="text" type="text" name="name" onChange={e => { this.setState({ name: e.target.value }) }} />
                      </FormGroup>
                      <FormGroup>
                        <FormGroup>
                          <ControlLabel>Receiving Point</ControlLabel>
                          <FormControl placeholder="text" type="text" name="receive" onChange={e => { this.setState({ receive: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                          <ControlLabel>Deliverly Point</ControlLabel>
                          <FormControl placeholder="text" type="text" name="delivery" onChange={e => { this.setState({ delivery: e.target.value }) }} />
                        </FormGroup>
                        <Checkbox
                          isChecked
                          number="1"
                          label="Subscribe to newsletter"
                        />
                      </FormGroup>
                      <Button
                        bsStyle="info"
                        type="submit"
                        fill>
                        Submit
                    </Button>
                    </form>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Driver Form"
                icon="pe-7s-stopwatch"
                // category="All products that were shipped"
                content={
                  <form onSubmit={this.addDriver}>
                    <FormGroup>
                      <ControlLabel>Name</ControlLabel>
                      <FormControl placeholder="text" type="text" name="name" onChange={e => { this.setState({ name: e.target.value }) }} />
                    </FormGroup><FormGroup>
                      <ControlLabel>Surname</ControlLabel>
                      <FormControl placeholder="text" type="text" name="surname" onChange={e => { this.setState({ surname: e.target.value }) }} />
                    </FormGroup>
                    <Button
                      bsStyle="info"
                      type="submit"
                      fill>
                      Submit
                    </Button>
                  </form>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="contact Form"
                icon="pe-7s-stopwatch"
                // category="All products that were shipped"
                content={
                  <div>
                    <form onSubmit={this.addContact} >
                      <FormGroup>
                        <ControlLabel>company</ControlLabel>
                        <FormControl placeholder="text" type="text" name="company" onChange={e => { this.setState({ company: e.target.value }) }} />
                      </FormGroup>
                      <FormGroup>
                        <FormGroup>
                          <ControlLabel>tel.</ControlLabel>
                          <FormControl placeholder="text" type="text" name="tel" onChange={e => { this.setState({ tel: e.target.value }) }} />
                        </FormGroup>
                      </FormGroup>
                      <Button
                        bsStyle="info"
                        type="submit"
                        fill>
                        Submit
                    </Button>
                    </form>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="images Form"
                icon="pe-7s-stopwatch"
                content={
                  <div>
                    <form onSubmit={this.addImage}>
                      <FormGroup>
                        <ControlLabel>image</ControlLabel>
                        <FormControl placeholder="text" type="file" name="image" onChange={(event) => {
                          this.setState({
                            image: event.target.value
                          });
                        }} />
                      </FormGroup>
                      <Button
                        bsStyle="info"
                        type="submit"
                        fill>
                        Submit
                    </Button>
                    </form>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FormInputPage;
