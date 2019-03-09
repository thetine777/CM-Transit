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
import {
  GoogleMap,
  ButtonHero
} from 'components'
// react component used to create charts

// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";

class RouteandTime extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Route & Timetable"
                icon="pe-7s-stopwatch"
                // category="All products that were shipped"
                content={
                  <div>
                    content
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

export default RouteandTime;
