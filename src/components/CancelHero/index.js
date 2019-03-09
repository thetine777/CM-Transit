import React from 'react'
import { CancelHeroStyled } from './styled'
import cx from "classnames";

export class CancelHero extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <CancelHeroStyled>
                <div className={customClass}>
                    <div className="cancel_product_style">
                        ยกเลิกสินค้า (ทั้งหมด)
                    </div>
                </div>
            </CancelHeroStyled>
        )
    }
}