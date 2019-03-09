import React from 'react'
import { PosChartStyled } from './styled'
import cx from "classnames";

export class PosChart extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosChartStyled>
                <div className={customClass}>
                    test
                </div>
            </PosChartStyled>
        )
    }
}