import React from 'react'
import { DataTableStyled } from './styled'
import cx from "classnames";
import ReactTable from "react-table";
import Button from "components/CustomButton/CustomButton.jsx";
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'
import {
    ButtonHero
} from 'components'
import Card from "components/Card/Card.jsx";

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
export class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: dataTable.map((prop, key) => {
                return {
                    id: key,
                    carid: prop[0],
                    type: prop[1],
                    status: prop[2],
                    logintime: prop[3],
                    logouttime: prop[4],
                    actions: (
                        <div>
                            <ButtonHero
                                theme_blue
                                label="Info"
                                width="100%"
                                height="30px"
                            />
                        </div>
                        // we've added some custom button actions
                        // <div className="actions-right">
                        //     {/* use this button to add a like kind of action */}
                        //     <Button
                        //         onClick={() => {
                        //             let obj = this.state.data.find(o => o.id === key);
                        //             alert(
                        //                 "You've clicked LIKE button on \n{ \carid: " +
                        //                 obj.carid +
                        //                 ", \ntype: " +
                        //                 obj.type +
                        //                 ", \nstatus: " +
                        //                 obj.status +
                        //                 ", \nlogintime: " +
                        //                 obj.logintime +
                        //                 ", \nlogouttime: " +
                        //                 obj.nlogouttime +
                        //                 "\n}."
                        //             );
                        //         }}
                        //         bsStyle="info"
                        //         simple
                        //         icon
                        //     >
                        //         <i className="fa fa-heart" />
                        //     </Button>{" "}
                        //     {/* use this button to add a edit kind of action */}
                        //     <Button
                        //         onClick={() => {
                        //             let obj = this.state.data.find(o => o.id === key);
                        //             alert(
                        //                 "You've clicked EDIT button on \n{ \carid: " +
                        //                 obj.carid +
                        //                 ", \ntype: " +
                        //                 obj.type +
                        //                 ", \nstatus: " +
                        //                 obj.status +
                        //                 ", \nlogintime: " +
                        //                 obj.logintime +
                        //                 ", \nlogouttime: " +
                        //                 obj.nlogouttime +
                        //                 "\n}."
                        //             );
                        //         }}
                        //         bsStyle="warning"
                        //         simple
                        //         icon
                        //     >
                        //         <i className="fa fa-edit" />
                        //     </Button>{" "}
                        //     {/* use this button to remove the data row */}
                        //     <Button
                        //         onClick={() => {
                        //             var data = this.state.data;
                        //             data.find((o, i) => {
                        //                 if (o.id === key) {
                        //                     // here you should add some custom code so you can delete the data
                        //                     // from this component and from your server as well
                        //                     data.splice(i, 1);
                        //                     console.log(data);
                        //                     return true;
                        //                 }
                        //                 return false;
                        //             });
                        //             this.setState({ data: data });
                        //         }}
                        //         bsStyle="danger"
                        //         simple
                        //         icon
                        //     >
                        //         <i className="fa fa-times" />
                        //     </Button>{" "}
                        // </div>
                    )
                };
            })
        };
    }
    render() {
        const {
            theme_standard,
            headercolumn,
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <DataTableStyled>
                <div className="main-content">
                    <Grid fluid>
                        <Row>
                            <Col md={12}>
                                <ReactTable
                                    data={this.state.data}
                                    filterable
                                    columns={headercolumn}
                                    defaultPageSize={10}
                                    showPaginationTop
                                    showPaginationBottom={false}
                                    className="-striped -highlight"
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </DataTableStyled>
        );
    }
}