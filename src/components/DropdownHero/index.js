import React from 'react'
import { DropdownHeroStyled } from './styled'
import cx from "classnames";
import Select from "react-select";
import { selectOptions } from "variables/Variables.jsx";
import {
    FormGroup,
    Col
} from 'react-bootstrap'

export class DropdownHero extends React.Component {
    render() {
        const {
            theme_standard,
            label,
            width_label,
            width_select,
            max_width
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <DropdownHeroStyled
                width_label={width_label}
                width_select={width_select}
                max_width={max_width}
            >
                <div className={customClass}>
                    <FormGroup>
                        <div className="control-label">{label}</div>
                        <div className="padding" >
                            <Select
                                placeholder="Single Select"
                                name="singleSelect"
                                options={selectOptions}
                                onChange={value =>
                                    this.setState({ singleSelect: value })
                                }
                            />
                        </div>
                    </FormGroup>
                </div>
            </DropdownHeroStyled >
        )
    }
}