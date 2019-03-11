import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Select from "react-select";
import {
  GoogleMap
} from 'components'


import Card from "components/Card/Card.jsx"

var selectOptions1 = [
  { value: "b1", label: "B1" },
  { value: "b2", label: "B2" },
  { value: "clearstation", label: "Clear Station" },
];
var selectOptions2 = [
  { value: "bus", label: "รถบัส" },
  { value: "redcar", label: "รถแดง" },
  { value: "tuktuk", label: "รถตุ๊กตุ๊ก" },
  { value: "all", label: "รถทั้งหมด" },
];
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
                    <Col md={2}>
                      <Select
                        placeholder="เลือกสถานี"
                        name="station"
                        value={this.state.station}
                        options={selectOptions1}
                        onChange={value =>
                          this.setState({ station: value })
                        }
                      />
                    </Col>
                    <Col md={2}>
                      <Select
                        placeholder="เลือกรถ"
                        name="car"
                        value={this.state.car}
                        options={selectOptions2}
                        onChange={value =>
                          this.setState({ car: value })
                        }
                      />
                    </Col>
                    <Col style={{ paddingTop: '15px' }} md={12}>
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
