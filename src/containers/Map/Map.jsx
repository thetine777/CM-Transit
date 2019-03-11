import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import Select from "react-select";
import {
  GoogleMap,
  ButtonHero
} from 'components'
// react component used to create charts

// react components used to create a SVG / Vector map
import Button from "components/CustomButton/CustomButton.jsx";
import Card from "components/Card/Card.jsx";
var selectOptions1 = [
  { value: "b1", label: "B1 อาเขต - ครูบาฯ" },
  { value: "b2", label: "B2 อาเขต - สนามบิน" },
  { value: "b3", label: "B3 อาเขต - ศูนย์ราชการ" },
];
var selectOptions2 = [
  { value: "r1", label: "R1 สวนสัตว์ - เซ็นทรัลเฟสติวัล" },
  { value: "r2", label: "R2 พรอมเมนาดา - สนามบิน" },
  { value: "r3right", label: "R3 วนขวา" },
  { value: "r3left", label: "R3 วนซ้าย" },
];
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station1: null,
      station2: null
    }
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Maps"
                icon="pe-7s-map-marker"
                // category="All products that were shipped"
                content={
                  <Row>
                    <Col md={2}>
                      <Select
                        placeholder="รถเทศบาลเชียงใหม่"
                        name="station1"
                        value={this.state.station1}
                        options={selectOptions1}
                        onChange={value =>
                          this.setState({ station1: value })
                        }
                      />
                    </Col>
                    <Col md={2}>
                      <Select
                        placeholder="RTC"
                        name="station2"
                        value={this.state.station2}
                        options={selectOptions2}
                        onChange={value =>
                          this.setState({ station2: value })
                        }
                      />
                    </Col>
                    <Col md={2}>
                      <Button
                        fill round wd
                      >
                        ปอ. 10 บ้านขวัญเวียง - เข้าเมือง
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        fill round wd
                      >
                        ทุกเส้นทาง
                      </Button>
                    </Col>
                    <Col md={2}>
                      <Button
                        fill round wd
                      >
                        Clear Station
                      </Button>
                    </Col>
                    <Col md={12} style={{ paddingTop: '15px' }}>
                      <GoogleMap
                      />
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

export default Map;
