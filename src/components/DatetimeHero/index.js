import React from 'react'
import { DatetimeHeroStyled } from './styled'
import cx from "classnames";
import Datetime from "react-datetime";
import { iconimages } from 'assets'
import {
    FormGroup
} from 'react-bootstrap'

export class DatetimeHero extends React.Component {
    render() {
        const {
            theme_standard,
            label,
            width_date,
            labal2
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <DatetimeHeroStyled
                width_date={width_date}
            >
                <div className={customClass}>
                    <div>
                        {label}
                        <span className="font">{labal2}</span>
                    </div>
                    <FormGroup>
                        <Datetime
                            timeFormat={false}
                            inputProps={{ placeholder: "Date Picker Here" }}
                            defaultValue={new Date()}
                        />
                    </FormGroup>
                    <figure>
                        <img src={iconimages["Calendar.png"]} />
                    </figure>
                </div>
            </DatetimeHeroStyled>
        )
    }
}