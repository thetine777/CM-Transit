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

class CallCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      data: [],
      driverinfo: [],
      datainfo: {
        name: '',
        receivepoint: '',
        deliverypoint: ''
      }
    }
  };
  showData = (id) => {
    const { messages } = this.state
    let datauser = messages.find(key => key.id === id)
    this.setState({
      datainfo: datauser
    })
  }
  addInformation = (e) => {
    e.preventDefault();
    const { datainfo } = this.state
    const information = {
      name: datainfo.name,
      receivepoint: datainfo.receivepoint,
      deliverypoint: datainfo.deliverypoint,
      driver: this.state.driver.label,
      price: this.state.price
    }
    console.log(information)
    
  }
  clearValue = () => {

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
          status: value.status,
          actions: (
            <div>
              <ButtonHero
                theme_blue
                label="Info"
                width="100%"
                height="30px"
                onClick={() => this.showData(key)}
              />
            </div>
          )
        }
      }).filter(message => message.status == 0)
      this.setState({
        messages: messageArray
      });
    });
    const driverRef = firebase.database().ref().child('driver');
    driverRef.on('value', snap => {
      const driverObj = snap.val();
      const driverArray = Object.entries(driverObj).map(([key, value]) => {
        return {
          value: key,
          label: value.name + ' ' + value.surname
        }
      })
      this.setState({
        driverinfo: driverArray
      });
    });
  }
  render() {
    const {
      datainfo,
      messages,
      driverinfo
    } = this.state
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
                      data={messages}
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
                  <Form horizontal onSubmit={this.addInformation} >
                    <FormGroup>
                      <ControlLabel className="col-md-3">ชื่อ</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="" type="text" value={datainfo.name} />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">จุดรับ</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="" type="text" value={datainfo.receivepoint} />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">จุดส่ง</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="" type="text" value={datainfo.deliverypoint} />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">คนขับ</ControlLabel>
                      <Col md={9}>
                        <Select
                          placeholder="คนขับรถ"
                          name="driver"
                          value={this.state.driver}
                          options={driverinfo}
                          onChange={value =>
                            this.setState({ driver: value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">ราคา</ControlLabel>
                      <Col md={9}>
                        <FormControl placeholder="บาท" type="text" name="price" onChange={e => { this.setState({ price: e.target.value }) }} />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col md={9} mdOffset={3}>
                        <Button bsStyle="info" fill type='submit' >
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
