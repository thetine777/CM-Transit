import React from 'react'
import { PosQRCodeStyled } from './styled'
import cx from "classnames";
import { iconimages } from 'assets'
import Button from "components/CustomButton/CustomButton.jsx";
import {
    FormGroup,
    InputGroup,
    FormControl
} from 'react-bootstrap'

export class PosQRCode extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosQRCodeStyled>
                <div className={customClass}>
                    <div className="input_member">
                        <div className="pad_barcode_qrcode">
                            <img src={iconimages["barcode.png"]} />
                        </div>
                        <div className="pad_barcode_qrcode">
                            <img src={iconimages["qrcode.png"]} />
                        </div>
                    </div>
                </div>
            </PosQRCodeStyled>
        )
    }
}