import React from 'react'
import { PosThumbnailStyled } from './styled'
import cx from "classnames";
import { iconimages } from 'assets'
import {
    Col,
    Thumbnail
} from 'react-bootstrap'

export class PosThumbnail extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosThumbnailStyled>
                <div className={customClass}>
                    <Col xs={6} md={3} lg={2} xl={1}>
                        <Thumbnail src={iconimages["image.png"]} alt="65x65">
                            <p>xxxxxxxx</p>
                            <p>xxxxxxxx</p>
                        </Thumbnail>
                    </Col>
                </div>
            </PosThumbnailStyled>
        )
    }
}