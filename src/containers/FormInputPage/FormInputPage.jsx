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
          message: value.message
        }
      })
      this.setState({
        messages: messageArray
      });
    });
  }
  addMessage = (e) => {
    // console.log(this.state.password);
    e.preventDefault();
    var dataInfo = {
      message: this.state.password
    }
    var messageRef = firebase.database().ref('react')
    var key = messageRef.push(dataInfo);
    // console.log(key);
    this.clearValue
  }
  deleteMessage = (id) => {
    firebase.database().ref().child('react/' + id).remove();
  }
  clearValue = () => {
    this.setState({
      password: null
    });
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
                  this.state.messages.map(message => {
                    return (
                      <h3>
                        {message.message}
                        <Button
                          onClick={() => this.deleteMessage(message.id)}
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
                        <ControlLabel>Password</ControlLabel>
                        <FormControl placeholder="text" type="text" name="password" onChange={e => { this.setState({ password: e.target.value }) }} />
                      </FormGroup>
                      <FormGroup>
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
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FormInputPage;
