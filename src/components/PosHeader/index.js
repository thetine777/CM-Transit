import React from 'react'
import { PosHeaderStyled } from './styled'
import cx from "classnames";
import { iconimages } from 'assets'

export class PosHeader extends React.Component {
    render() {
        const { theme_standard } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        return (
            <PosHeaderStyled>
                <div className={customClass}>
                    <div className="direction_head">
                        <div>
                            <img src={iconimages["logo.png"]} />
                        </div>
                        <div className="user_logout">
                            <ul>
                                <li><span className="user">USER Cashier</span><img src={iconimages["user.png"]} /></li>
                                <li><span className="logout">Log Out</span><img src={iconimages["logout.png"]} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </PosHeaderStyled>
        )
    }
}