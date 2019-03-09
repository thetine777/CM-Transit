import React from 'react'
import { PosModalStyled } from './styled'
import cx from "classnames";
import { CustomModal } from 'components'
import { iconimages } from 'assets'

export class PosModalPayment extends React.Component {
    render() {
        const { theme_payment } = this.props
        const customClass = cx({
            "theme_payment": theme_payment
        })
        return (
            <PosModalStyled>
                <div className={customClass}>
                    <div className="modal_payment">
                        <div className="modal_image">
                            <figure className="size_figure">
                                <img className="size_image" src={iconimages["image.png"]} />
                            </figure>
                        </div>
                        <div className="">
                            <p>ชื่อสินค้า xxxxxxxxxxxxxxx</p>
                            <p>รายละเอียดสินค้า xxxxxxxxxxxxxxx</p>
                        </div>
                    </div>
                    <div className="modal_payment2">
                        <div className="price">ราคา 10xxx</div>
                        <div className="discount">โปรโมชั่น/ส่วนลด  10฿</div>
                    </div>
                    <div className="modal_payment3">
                        <div className="font_style">จำนวน</div>
                        <div className="padding">
                            <button className="modal_button" >
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                            <input className="modal_input_amount"></input>
                            <button className="modal_button" >
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </div>
                        <div className="font_style">ส่วนลด</div>
                        <div className="font_bath">฿</div>
                        <input className="modal_input_discount"></input>
                    </div>
                    <div className="modal_payment4">
                        <div className="font_sum">รวมราคา</div>
                        <div className="font_bath">฿</div>
                        <input className="modal_input_sum"></input>
                    </div>
                    <div className="modal_payment5">
                        <button className="botton_submit">
                            <p>ตกลง</p>
                        </button>
                    </div>
                </div>
            </PosModalStyled>
        )
    }
}
export class PosModalMember extends React.Component {
    render() {
        const { theme_member } = this.props
        const customClass = cx({
            "theme_member": theme_member
        })
        return (
            <PosModalStyled>
                <div className={customClass}>
                    <div className="modal_member_all">
                        <div className="modal_member">
                            <div className="modal_image">
                                <figure className="size_figure">
                                    <img className="size_image" src={iconimages["user.png"]} />
                                </figure>
                            </div>
                            <div className="Detail_style">
                                <p>ชื่อสินค้า xxxxxxxxxxxxxxx</p>
                                <p>รายละเอียดสินค้า xxxxxxxxxxxxxxx</p>
                            </div>
                        </div>
                        <div className="modal_member2">
                            <p>10</p>
                            <span className="font_point">ยอดสะสมแต้มทั้งหมด</span>
                        </div>
                    </div>
                </div>
            </PosModalStyled>
        )
    }
}
export class PosModalQ extends React.Component {
    render() {
        const { theme_Q } = this.props
        const customClass = cx({
            "theme_Q": theme_Q
        })
        return (
            <PosModalStyled>
                <div className={customClass}>
                    <div className="modal_Q">
                        <div className="modal_image">
                            <figure className="size_figure">
                                <img className="size_image" src={iconimages["q.png"]} />
                            </figure>
                        </div>
                        <div className="font_style">กดเพื่อเรียกคิว</div>
                    </div>
                    <div className="modal_Q2">
                        <button className="button_Q">
                            คิวที่ 1
                    </button>
                        <button className="button_Q">
                            คิวที่ 2
                    </button>
                        <button className="button_Q">
                            คิวที่ 3
                    </button>
                        <button className="button_Q">
                            คิวที่ 4
                    </button>
                        <button className="button_Q">
                            คิวที่ 5
                    </button>
                        <button className="button_Q">
                            คิวที่ 6
                    </button>
                        <button className="button_Q">
                            คิวที่ 7
                    </button>
                        <button className="button_Q">
                            คิวที่ 8
                    </button>
                        <button className="button_Q">
                            คิวที่ 9
                    </button>
                        <button className="button_Q">
                            คิวที่ 10
                    </button>
                    </div>
                </div>
            </PosModalStyled>
        )
    }
}
export class PosModalCatalog extends React.Component {
    render() {
        const { theme_Catalog } = this.props
        const customClass = cx({
            "theme_Catalog": theme_Catalog
        })
        return (
            <PosModalStyled>
                <div className={customClass}>
                    <div className="modal_catalog">
                        <div className="sub_catalog"><span className="Minus">-</span><div className="border_catalog">คอมพิวเตอร์</div></div>
                        <div className="sub_catalog"><span className="Minus">-</span><div className="border_catalog">แทบเล็ต</div></div>
                        <div className="sub_catalog"><span className="Minus">-</span><div className="border_catalog">แล็ปท๊อป</div></div>
                        <div className="sub_catalog"><span className="Minus">-</span><div className="border_catalog">โทรศัพท์มือถือ</div></div>
                        <div className="sub_catalog"><span className="Minus">-</span><div className="border_catalog">กล้องถ่ายรูป</div></div>
                    </div>
                </div>
            </PosModalStyled>
        )
    }
}