import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Select from "react-select";
import { selectOptions } from "variables/Variables.jsx";
import {
  GoogleMap
} from 'components'


import Card from "components/Card/Card.jsx";

class BusMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: null,
      car: null
    }
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row className="padding">
            <Col md={12}>
              <Card
                title="Maps"
                icon="pe-7s-map-marker"
                // category="All products that were shipped"
                content={
                  // <GoogleMap
                  // />
                  <Row>
                    <Col md={3}>
                      <Select
                        placeholder="เลือกสถานี"
                        name="station"
                        value={this.state.station}
                        options={selectOptions}
                        onChange={value =>
                          this.setState({ station: value })
                        }
                      />
                    </Col>
                    <Col md={3}>
                      <Select
                        placeholder="เลือกรถ"
                        name="car"
                        value={this.state.car}
                        options={selectOptions}
                        onChange={value =>
                          this.setState({ car: value })
                        }
                      />
                    </Col>
                    <Col className="padding" md={12}>
                      <GoogleMap />
                    </Col>
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default BusMap;
