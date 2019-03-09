import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import UserCard from "components/Card/UserCard.jsx";
import firebase from 'firebase';
import ReactTable from "react-table";
import avatar from "assets/img/default-avatar.png";
import {
  GoogleMap,
  ButtonHero
} from 'components'
// react component used to create charts

// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";

const headercolumn = [
  {
    Header: "ลำดับ",
    accessor: "no"
  },
  {
    Header: "ชื่อ",
    accessor: "name"
  },
  {
    Header: "นามสกุล",
    accessor: "lastname"
  },
  {
    Header: "เบอร์โทรศัพท์",
    accessor: "tel"
  },
  {
    Header: "ทะเบียนรถ",
    accessor: "licenseplate"
  },
  {
    Header: "เลขบัตรประจำตัวประชาชน",
    accessor: "idcard"
  },
  {
    Header: "เลขที่ใบอนุญาตขับขี่",
    accessor: "driverlicense"
  },
  {
    Header: "กลุ่ม",
    accessor: "groups"
  },
  {
    Header: "รูปประจำตัว",
    accessor: "profilepicture"
  },
  {
    Header: "แก้ไข",
    accessor: "actions",
    sortable: false,
    filterable: false
  },
]

const dataTable = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Timothy Mooney", "Office Manager", "London", "37"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"]
];
class DriverDetail extends Component {
  constructor(props) {
    super(props);
    // var config = {
    //   apiKey: "AIzaSyAuPd4dMENXAUXDQAFnuPynCVmzk1cKu8Q",
    //   authDomain: "test-project-89fc4.firebaseapp.com",
    //   databaseURL: "https://test-project-89fc4.firebaseio.com",
    //   projectId: "test-project-89fc4",
    //   storageBucket: "test-project-89fc4.appspot.com",
    //   messagingSenderId: "990244526809"
    // };
    // firebase.initializeApp(config);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          no: prop[0],
          name: prop[1],
          lastname: prop[2],
          tel: prop[3],
          licenseplate: prop[4],
          idcard: prop[5],
          driverlicense: prop[6],
          groups: prop[7],
          profilepicture: prop[8],
          actions: (
            <div>
              <ButtonHero
                theme_yellow
                label="แก้ไข"
                width="100%"
                height="30px"
              />
            </div>
          )
        };
      })
    };
  }
  render() {
    return (
      <div className="main-content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Driver Detail"
                icon="pe-7s-id"
                // category="All products that were shipped"
                content={
                  <div>
                    <ReactTable
                      data={this.state.data}
                      filterable
                      columns={headercolumn}
                      defaultPageSize={10}
                      showPaginationTop
                      showPaginationBottom={false}
                      className="-striped -highlight"
                    />
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

export default DriverDetail;
