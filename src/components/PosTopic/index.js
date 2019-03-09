import React from 'react'
import { PosTopicStyled } from './styled'
import cx from "classnames";

export class PosTopic extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosTopicStyled>
                <div className={customClass}>
                    <div className="direction_content1">
                        <div className="content_topic">
                            <div className="product_topic1">เลือกหมวดหมู่ย่อยของสินค้า</div>
                            <div className="product_topic2">สินค้าทั้งหมด</div>
                        </div>
                    </div>
                </div>
            </PosTopicStyled>
        )
    }
}