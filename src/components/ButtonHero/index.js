import React from 'react'
import { ButtonHeroStyled } from './styled'
import cx from "classnames";

export class ButtonHero extends React.Component {
    render() {
        const {
            theme_standard,
            theme_Grey,
            theme_blue,
            theme_yellow,
            width,
            height,
            label,
            onClick
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard,
            "theme_Grey": theme_Grey,
            "theme_blue": theme_blue,
            "theme_yellow": theme_yellow
        })
        return (
            <ButtonHeroStyled
                width={width}
                height={height}
            >
                <div className={customClass}>
                    <button className="button_submit" onClick={onClick}>{label}</button>
                </div>
            </ButtonHeroStyled>
        )
    }
}