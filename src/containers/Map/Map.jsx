import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import ReactTable from "react-table";
import {
  GoogleMap,
  ButtonHero
} from 'components'
// react component used to create charts

// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";

class Map extends Component {
  constructor(props) {
    super(props);
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
                  <GoogleMap
                  />
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
