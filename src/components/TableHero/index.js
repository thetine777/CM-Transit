import React from 'react'
import { TableHeroStyled } from './styled'
import cx from "classnames";
import { iconimages } from 'assets'
import {
    Table
} from 'react-bootstrap'

export class TableHero extends React.Component {
    render() {
        const {
            theme_standard,
            theme_topRadius,
            theme_bottomRadius,
            fieldHeader,
            fieldData,
            children,
            height,
            width,
            max_height
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard,
            "theme_topRadius": theme_topRadius,
            "theme_bottomRadius": theme_bottomRadius
        })
        return (
            <TableHeroStyled
                height={height}
                width={width}
                max_height={max_height}
            >
                <div className={customClass}>
                    <div className="table_order">
                        <Table responsive className="table">
                            <thead>
                                <tr>
                                    {
                                        fieldHeader && fieldHeader.map((data, i) => {
                                            return (
                                                <th key={i}>{data}</th>
                                            )
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    children
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </TableHeroStyled>
        )
    }
}