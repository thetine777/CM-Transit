import React from 'react'
import { InputwithButtonStyled } from './styled'
import cx from "classnames";
import {
    FormGroup,
    InputGroup,
    FormControl
} from 'react-bootstrap'

export class InputwithButton extends React.Component {
    render() {
        const {
            theme_standard,
            width_input,
            height_input,
            width_button,
            height_button,
            label,
            placeholder,
            label2,
            width_label
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <InputwithButtonStyled
                width_input={width_input}
                height_input={height_input}
                width_button={width_button}
                height_button={height_button}
                width_label={width_label}
            >
                <div className={customClass}>
                    <div className="label2">{label2}</div>
                    <FormGroup>
                        <InputGroup>
                            <FormControl className="form_control" type="text" placeholder={placeholder} />
                            <InputGroup.Addon className="input-group-addon">
                                <button className="btn">{label}</button>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </div>
            </InputwithButtonStyled>
        )
    }
}