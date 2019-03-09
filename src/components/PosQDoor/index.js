import React from 'react'
import { PosQDoorStyled } from './styled'
import cx from "classnames";
import { iconimages } from 'assets'

export class PosQDoor extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosQDoorStyled>
                <div className={customClass}>
                    <ul>
                        <div className="border_topic">
                            <li><div className="topic">อุปกรณ์อิเล็กทรอนิกส์</div></li>
                            <li><div className="topic"><img className="image_topic" src={iconimages["q.png"]} /><span className="padfont">กดเพื่อเรียกคิว</span></div></li>
                            <li><div className="topic"><img className="image_topic" src={iconimages["door.png"]} /><span className="padfont">กดเปิดประตู</span></div></li>
                        </div>
                    </ul>
                </div>
            </PosQDoorStyled>
        )
    }
}