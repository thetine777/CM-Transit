import React from 'react'
import { InputHeroStyled } from './styled'
import cx from "classnames";
import {
    Col,
    Row,
    FormGroup,
    ControlLabel,
    FormControl,
} from 'react-bootstrap'

export class InputHero extends React.Component {
    render() {
        const {
            theme_standard,
            theme_Green,
            height,
            label,
            width_label,
            width_input,
            max_width,
            placeholder,
            bath,
            label2,
            classname
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard,
            "theme_Green": theme_Green

        })
        return (
            <InputHeroStyled
                width_label={width_label}
                width_input={width_input}
                height={height}
                max_width={max_width}
            >
                <div className={customClass}>
                    <FormGroup>
                        <div className="control-label">{label}</div>
                        <div className="padding" >
                            <span className="label2">{label2}</span>
                            <FormControl
                                placeholder={placeholder}
                                type="text"
                                componentClass={classname}
                            />
                        </div>
                        <span className="bath">{bath}</span>
                    </FormGroup>
                </div>
            </InputHeroStyled>
        )
    }
}