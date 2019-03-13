import React, { Component } from "react";
import {
  Grid,
  Col,
  Row,
} from "react-bootstrap";
import * as firebase from 'firebase'

// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    const rootRef = firebase.database().ref().child('contact');
    rootRef.on('value', snap => {
      const contactObj = snap.val();
      const contactArray = Object.entries(contactObj).map(([key, value]) => {
        return {
          id: key,
          company: value.company,
          tel: value.tel,
        }
      })
      this.setState({
        contacts: contactArray
      });
    });
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Contact Us"
                icon="pe-7s-stopwatch"
                // category="All products that were shipped"
                content={
                  this.state.contacts.map(data => {
                    return (
                      <h4>
                        <span style={{ paddingRight: '10px' }}>{data.company}</span>
                        <span>{data.tel}</span>
                      </h4>
                    )
                  })
                  // <h4>
                  //   content
                  // </h4>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contact;
