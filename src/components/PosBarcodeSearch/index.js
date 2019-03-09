import React from 'react'
import { PosBarcodeSearchStyled } from './styled'
import cx from "classnames";
import {
    Col,
    Row,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock
} from 'react-bootstrap'

export class PosBarcodeSearch extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosBarcodeSearchStyled>
                <div className={customClass}>
                    <Row>
                        <Col md={12} className="searching">
                            <FormGroup>
                                <ControlLabel>
                                    ค้นหาสินค้า
                                </ControlLabel>
                                <Col sm={9}>
                                    <FormControl
                                        placeholder="ค้นหา..."
                                        type="text"
                                    />
                                </Col>
                            </FormGroup>
                            {/* <span>ค้นหาสินค้า</span> */}
                            {/* <input className="input_searching"></input> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="searching">
                            <FormGroup>
                                <ControlLabel>
                                    จำนวนขาย
                                </ControlLabel>
                                <Col sm={9}>
                                    <FormControl type="text" />
                                </Col>
                            </FormGroup>
                            {/* <span>จำนวนขาย</span>
                            <input className="input_amount"></input> */}
                        </Col>
                    </Row>

                </div>
            </PosBarcodeSearchStyled>
        )
    }
}