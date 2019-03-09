import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import ReactTable from "react-table";
import {
  ButtonHero
} from 'components'
// react component used to create charts

// react components used to create a SVG / Vector map

import Card from "components/Card/Card.jsx";

const headercolumn = [
  {
    Header: "no.",
    accessor: "no"
  },
  {
    Header: "date",
    accessor: "date"
  },
  {
    Header: "time",
    accessor: "time"
  },
  {
    Header: "header center",
    accessor: "headerCenter"
  },
  {
    Header: "id car",
    accessor: "idcar"
  },
  {
    Header: "cm battery",
    accessor: "cmBattery"
  },
  {
    Header: "signal gps",
    accessor: "signalGps"
  },
  {
    Header: "la google",
    accessor: "laGoogle"
  },
  {
    Header: "long google",
    accessor: "longGoogle"
  },
  {
    Header: "fast",
    accessor: "fast"
  },
  {
    Header: "direction",
    accessor: "direction"
  },
  {
    Header: "phone gps",
    accessor: "phoneGps"
  },
  {
    Header: "ip gps",
    accessor: "ipGps"
  },
  {
    Header: "signal fall",
    accessor: "signalFall"
  },
  {
    Header: "correct date",
    accessor: "correctDate"
  },
  {
    Header: "driver name",
    accessor: "driverName"
  },
  {
    Header: "driver id card",
    accessor: "driverIdCard"
  },
  {
    Header: "driver DateTime Log In Out",
    accessor: "driverDateTimeLogInOut"
  },
  {
    Header: "Status Log In Out",
    accessor: "statusLogInOut"
  },
  {
    Header: "log in",
    accessor: "logIn"
  },
  {
    Header: "log out",
    accessor: "logOut"
  },
  {
    Header: "sensor pm",
    accessor: "sensorPm"
  },
  {
    Header: "register id",
    accessor: "registerId"
  },
  {
    Header: "type",
    accessor: "type"
  },
  {
    Header: "brand",
    accessor: "brand"
  },
  {
    Header: "model",
    accessor: "model"
  },
  {
    Header: "color",
    accessor: "color"
  },
  {
    Header: "year car",
    accessor: "yearCar"
  },
  {
    Header: "car body no",
    accessor: "carBodyNo"
  },
  {
    Header: "motor id",
    accessor: "motorId"
  },
  {
    Header: "detail",
    accessor: "detail"
  },
  {
    Header: "user",
    accessor: "user"
  },
  {
    Header: "date Time Use",
    accessor: "dateTimeUse"
  },
  {
    Header: "tracking transport",
    accessor: "trackingTransport"
  },
  {
    Header: "driver title",
    accessor: "driverTitle"
  },
  {
    Header: "driver name",
    accessor: "driverName"
  },
  {
    Header: "driver sername",
    accessor: "driverSername"
  },
  {
    Header: "detail2",
    accessor: "detail2"
  },
  {
    Header: "province",
    accessor: "province"
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
class ReportDriver extends Component {
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
          date: prop[1],
          time: prop[2],
          headerCenter: prop[3],
          idcar: prop[4],
          cmBattery: prop[5],
          signalGps: prop[6],
          laGoogle: prop[7],
          longGoogle: prop[8],
          fast: prop[9],
          direction: prop[10],
          phoneGps: prop[11],
          ipGps: prop[12],
          signalFall: prop[13],
          correctDate: prop[14],
          driverName: prop[15],
          driverIdCard: prop[16],
          driverDateTimeLogInOut: prop[17],
          logIn: prop[18],
          logOut: prop[19],
          sensorPm: prop[20],
          registerId: prop[21],
          type: prop[22],
          brand: prop[23],
          model: prop[24],
          color: prop[25],
          yearCar: prop[26],
          carBodyNo: prop[27],
          motorId: prop[28],
          detail: prop[29],
          user: prop[30],
          dateTimeUse: prop[31],
          trackingTransport: prop[32],
          driverTitle: prop[33],
          driverName: prop[34],
          driverSername: prop[35],
          detail2: prop[36],
          province: prop[37],
          // actions: (
          //   <div>
          //     <ButtonHero
          //       theme_yellow
          //       label="แก้ไข"
          //       width="100%"
          //       height="30px"
          //     />
          //   </div>
          // )
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
                title="Driver Report"
                icon="pe-7s-note2"
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

export default ReportDriver;
