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
      },
      //Error_type
      name_error: '',
      receivepoint_error: '',
      deliverypoint_error: '',
      price_error: '',
      //data information
      information: {
        name: '',
        receivepoint: '',
        deliverypoint: '',
        driver: '',
        price: ''
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
    let information = {
      name: this.state.datainfo.name,
      receivepoint: this.state.datainfo.receivepoint,
      deliverypoint: this.state.datainfo.deliverypoint,
      driver: this.state.driver.label,
      price: this.state.price
    }
    this.state.datainfo.name === "" || this.state.datainfo.name === null
      ? this.setState({
        name_error: (
          <small className="text-danger">กรุณากรอกชื่อ</small>
        )
      })
      : this.setState({ name_error: '' });
    this.state.datainfo.receivepoint === "" || this.state.datainfo.receivepoint === null
      ? this.setState({
        receivepoint_error: (
          <small className="text-danger">กรุณากรอกจุดรับ</small>
        )
      })
      : this.setState({ receivepoint_error: '' });
    this.state.datainfo.deliverypoint === '' || this.state.datainfo.deliverypoint === null
      ? this.setState({
        deliverypoint_error: (
          <small className="text-danger">กรุณากรอกจุดส่ง</small>
        )
      })
      : this.setState({ deliverypoint_error: '' });
    this.state.datainfo.price === '' || this.state.datainfo.price === null
      ? this.setState({
        price_error: (
          <small className="text-danger">กรุณากรอกราคา</small>
        )
      })
      : this.setState({ price_error: '' });
    if (information.name && information.receivepoint && information.deliverypoint && information.driver && information.price) {
      console.log('have text');
    }

    console.log(information);
    // const { datainfo } = this.state
    // const information = {
    //   name: datainfo.name,
    //   receivepoint: datainfo.receivepoint,
    //   deliverypoint: datainfo.deliverypoint,
    //   driver: this.state.driver.value,
    //   price: this.state.price
    // }
    // console.log(information)

  }
  clearValue = () => {

  }
  handleOnchange = (field, value) => {
    let datainfo = this.state.datainfo
    datainfo[field] = value
    this.setState({
      datainfo
    })
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
      }).filter(message => message.status == 'enabled')
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
    this.setState({ inputValue: this.props.name });
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
                        <FormControl
                          placeholder=""
                          type="text"
                          value={datainfo.name}
                          name="name"
                          onChange={event => {
                            this.handleOnchange('name', event.target.value)
                            event.target.value === "" || event.target.value === null
                              ? this.setState({
                                name_error: (
                                  <small className="text-danger">
                                    กรุณากรอกชื่อ
                                      </small>
                                )
                              })
                              : this.setState({ name_error: null });
                          }}
                        />
                        {this.state.name_error}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">จุดรับ</ControlLabel>
                      <Col md={9}>
                        <FormControl
                          placeholder=""
                          type="text"
                          value={datainfo.receivepoint}
                          name="receivepoint"
                          onChange={event => {
                            this.handleOnchange('receivepoint', event.target.value)
                            event.target.value === ""
                              ? this.setState({
                                receivepoint_error: (
                                  <small className="text-danger">
                                    กรุณากรอกจุดรับ
                                    </small>
                                )
                              })
                              : this.setState({ receivepoint_error: null });
                          }}
                        />
                        {this.state.receivepoint_error}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">จุดส่ง</ControlLabel>
                      <Col md={9}>
                        <FormControl
                          placeholder=""
                          type="text"
                          value={datainfo.deliverypoint}
                          name="deliverypoint"
                          onChange={event => {
                            this.handleOnchange('deliverypoint', event.target.value)
                            event.target.value === ""
                              ? this.setState({
                                deliverypoint_error: (
                                  <small className="text-danger">
                                    กรุณากรอกจุดส่ง
                                    </small>
                                )
                              })
                              : this.setState({ deliverypoint_error: null });
                          }}
                        />
                        {this.state.deliverypoint_error}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel className="col-md-3">คนขับ</ControlLabel>
                      <Col md={9}>
                        <Select
                          required
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
                        <FormControl
                          placeholder="บาท"
                          type="text"
                          name="price"
                          onChange={event => {
                            this.setState({ price: event.target.value })
                            event.target.value === ""
                              ? this.setState({
                                price_error: (
                                  <small className="text-danger">
                                    กรุณากรอกราคา
                                    </small>
                                )
                              })
                              : this.setState({ price_error: null });
                          }}
                        />
                        {this.state.price_error}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col md={9} mdOffset={3}>
                        <Button
                          // disabled={
                          //   this.state.name_error ||
                          //   this.state.receivepoint_error ||
                          //   this.state.deliverypoint_error ||
                          //   this.state.price_error
                          // }
                          bsStyle="info"
                          fill
                          type='submit' >
                          ส่งงาน
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                }
              />
            </Col>
            <Col md={12}>
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
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CallCenter;
