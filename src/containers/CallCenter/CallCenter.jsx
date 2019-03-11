import React, { Component } from "react";
import {
  Grid,
  Col,
  Row,
  FormControl,
  ControlLabel,
  FormGroup,
  Form,
  Checkbox
} from "react-bootstrap";
import UserCard from "components/Card/UserCard.jsx";
import ReactTable from "react-table";
import * as firebase from 'firebase'
import Button from "components/CustomButton/CustomButton.jsx";
import {
  GoogleMap,
  ButtonHero
} from 'components'
import _ from 'lodash';
import Select from "react-select";
// react component used to create charts

// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";

const headercolumn = [
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "ชื่อ",
    accessor: "name"
  },
  {
    Header: "จุดรับ",
    accessor: "receivepoint"
  },
  {
    Header: "จุดส่ง",
    accessor: "deliverypoint"
  },
  {
    Header: "information",
    accessor: "actions",
    sortable: false,
    filterable: false
  }
]

const selectOptions1 = [
  { value: "b1", label: "B1 อาเขต - ครูบาฯ" },
  { value: "b2", label: "B2 อาเขต - สนามบิน" },
  { value: "b3", label: "B3 อาเขต - ศูนย์ราชการ" }
]

class CallCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  };
  showData = (e) => {
    console.log(e);
    
  }
  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    rootRef.on('value', snap => {
      const messageObj = snap.val();
      const messageArray = Object.entries(messageObj).map(([key, value]) => {
        return {
          id: key,
          name: value.name,
          receivepoint: value.receive,
          deliverypoint: value.delivery,
          actions: (
            <div>
              <ButtonHero
                theme_blue
                label="Info"
                width="100%"
                height="30px"
                onClick={()=> this.showData(key)}
              />
            </div>
          )
        }
      })
      this.setState({
        messages: messageArray
      });
    });
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={7}>
              <Card
                title="Info"
                icon="pe-7s-info"
                content={
                  <div>
                    <ReactTable
                      data={this.state.messages}
                      filterable
                      columns={headercolumn}
                      defaultPageSize={5}
                      showPaginationTop
                      showPaginationBottom={false}
                      className="-striped -highlight"
                    />
                  </div>
                }
              />
              <Card
                title="Map"
                icon="pe-7s-map-marker"
                content={
                  <GoogleMap
                    theme_standard
                  />
                }
              />
            </Col>
            <Col md={5}>
              <Card
                title="Form"
                icon="pe-7s-note2"
                content={
                  <Form horizontal>
                    <FormGroup>
                      <ControlLabel className="col-md-3">ชื่อ</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="" type="text" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">จุดรับ</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="" type="text" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">จุดส่ง</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="" type="text" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">คนขับ</ControlLabel>
                      <Col md={9}>
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
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">ราคา</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="" type="text" />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col md={9} mdOffset={3}>
                        <Button bsStyle="info" fill>
                          ส่งงาน
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CallCenter;
