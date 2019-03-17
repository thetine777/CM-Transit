import React, { Component } from "react";
import {
  Grid,
  Col,
  Row,
} from "react-bootstrap";

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
                    <figure style={{ heigth: 'auto' }}>
                      <img style={{ width: '100%' }} src='https://firebasestorage.googleapis.com/v0/b/test-96162.appspot.com/o/minibus.jpg?alt=media&token=d650a855-a39a-4def-9795-ba0e7154bde5' />
                    </figure>
                    <figure style={{ heigth: 'auto' }}>
                      <img style={{ width: '100%' }} src='https://firebasestorage.googleapis.com/v0/b/test-96162.appspot.com/o/rtc.jpg?alt=media&token=dad8dc90-6fd3-4cb0-8cc4-df25f9c4cdac' />
                    </figure>
                    <figure style={{ heigth: 'auto' }}>
                      <img style={{ width: '100%' }} src='https://firebasestorage.googleapis.com/v0/b/test-96162.appspot.com/o/kwanviang.jpg?alt=media&token=3fa674f0-5b95-4ee3-9358-9b64f2c0c3c6' />
                    </figure>
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
