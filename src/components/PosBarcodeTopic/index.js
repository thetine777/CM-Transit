import React from 'react'
import { PosBarcodeTopicStyled } from './styled'
import cx from "classnames";
import { iconimages } from 'assets'

export class PosBarcodeTopic extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosBarcodeTopicStyled>
                <div className={customClass}>
                    <ul>
                        <div className="border_topic">
                            <li><div className="topic"><img src={iconimages["Calendar.png"]} /><span className="padfont">วันที่ xx / xx / 25xx</span></div></li>
                            <li><div className="topic"><img src={iconimages["Clock.png"]} /><span className="padfont">เวลา 12.00 น.</span></div></li>
                        </div>
                    </ul>
                </div>
            </PosBarcodeTopicStyled>
        )
    }
}