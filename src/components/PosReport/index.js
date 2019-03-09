import React from 'react'
import { PosReportStyled } from './styled'
import cx from "classnames";
import { Grid, Row, Col, FormGroup, ProgressBar } from "react-bootstrap";
import Datetime from "react-datetime";


export class PosReport extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosReportStyled>
                <div className={customClass}>
                    <ul>
                        <li className="list">
                            รายการขายประจำวัน
                        </li>
                        <li className="list">
                            รายการขายประจำสัปดาห์
                        </li>
                        <li className="list">
                            รายการขายประจำเดือน
                        </li>
                        <li className="list">
                            รายการขายประจำปี
                        </li>
                        <li className="datetime">
                            <FormGroup>
                                <Datetime
                                    timeFormat={false}
                                    inputProps={{ placeholder: "Date Picker Here" }}
                                    defaultValue={new Date()}
                                />
                            </FormGroup>
                            <span className="font_color">ถึง</span>
                            <FormGroup>
                                <Datetime
                                    timeFormat={false}
                                    inputProps={{ placeholder: "Date Picker Here" }}
                                    defaultValue={new Date()}
                                />
                            </FormGroup>
                        </li>
                    </ul>
                </div>
            </PosReportStyled>
        )
    }
}