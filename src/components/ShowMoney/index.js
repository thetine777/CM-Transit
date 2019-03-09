import React from 'react'
import { ShowMoneyStyled } from './styled'
import cx from "classnames";

export class ShowMoney extends React.Component {
    render() {
        const {
            theme_black,
            theme_red,
            theme_green,
            theme_balance,
            theme_barBlackTop,
            theme_barBlackBottom,
            theme_barRed,
            theme_barGrey,
            theme_barGreen,
            label,
            width,
            height,
            show_money,
            bath
        } = this.props
        const customClass = cx({
            "theme_black": theme_black,
            "theme_red": theme_red,
            "theme_green": theme_green,
            "theme_balance": theme_balance,
            "theme_barBlackTop" : theme_barBlackTop,
            "theme_barBlackBottom" : theme_barBlackBottom,
            "theme_barRed" : theme_barRed,
            "theme_barGreen" : theme_barGreen,
            "theme_barGrey" : theme_barGrey
        })
        return (
            <ShowMoneyStyled
                width={width}
                height={height}
            >
                <div className={customClass}>
                    <div className="title">{label}</div>
                    <div className="show_money">
                        {show_money}
                        <span className="bath">{bath}</span>
                    </div>

                </div>
            </ShowMoneyStyled>
        )
    }
}