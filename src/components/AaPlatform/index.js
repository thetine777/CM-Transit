import React from 'react'
import { APlatformStyled } from './styled'
import cx from "classnames";

export class APlatform extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <APlatformStyled>
                <div className={customClass}>
                    test
                </div>
            </APlatformStyled>
        )
    }
}