import React from 'react'
import { BottonModalStyled } from './styled'
import cx from "classnames";

export class BottonModal extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <BottonModalStyled>
                <div className={customClass}>
                    <button className="botton_close"><span className="glyphicon glyphicon-remove"></span></button>
                </div>
            </BottonModalStyled>
        )
    }
}