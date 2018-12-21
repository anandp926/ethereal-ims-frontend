import React from 'react'
import { Modal } from 'antd';

const modal = (props) => {
    return(
        <Modal 
            title={props.heading}
            visible={props.showModal}
            onOk={props.okClick}
            onCancel={props.cancelClick}
            okText={props.okText ? props.okText : 'Ok'}
            cancelText="Cancel"
            okType={props.okBType ? props.okBType : 'primary'}
            cancelType={props.cancelBType ? props.cancelBType : 'default'}
            footer={props.footer}
            maskClosable={props.maskClosable}
            width={768}
        >
            {props.children}
        </Modal>
    )
}

export default modal
