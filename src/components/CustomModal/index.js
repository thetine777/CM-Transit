import React from 'react'
import { CustomModalStyled } from './styled'
import cx from 'classnames'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'
import { 
    COLOR,
    FONT
 } from 'assets'
import {
    BottonModal
} from 'components'
import './style.css'

export class CustomModal extends React.Component {

    handleHide = () => {
        console.log('hide');
    }
    render() {
        const {
            isShow,
            handleHide,
            handleClose,
            handleSubmit,
            textTitle,
            textClose,
            textSubmit,
            children,
            theme_standard,
            width,
            padding
        } = this.props
        const customClass = cx({
            "theme_standard": theme_standard
        })
        const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: width,
                overflow: 'none',
                border: `1px solid ${COLOR.Grey_3}`,
                boxShadow: `1px 1px 20px 1px ${COLOR.Grey_3}`,
                borderRadius: `10px`,
                padding: padding
            }
        }
        return (
            <CustomModalStyled>
                <Modal
                    // className={customClass}
                    isOpen={isShow}
                    onHide={handleHide}
                    style={customStyles}
                    overlayClassName="Overlay"
                >
                    {/* <Modal.Header closeButton>
                        <Modal.Title>
                            {textTitle}
                        </Modal.Title>
                    </Modal.Header> */}
                    {/* <Modal.Body > */}
                    <BottonModal 
                        theme_standard
                        />
                    {children}
                    {/* </Modal.Body> */}
                    {/* <Modal.Footer>
                        {
                            textClose &&
                            <Button onClick={handleClose}>{textClose}</Button>
                        }
                        {
                            textSubmit &&
                            <Button bsStyle="primary" onClick={handleSubmit}>{textSubmit}</Button>
                        }
                    </Modal.Footer> */}
                </Modal>
            </CustomModalStyled>
        )
    }
}