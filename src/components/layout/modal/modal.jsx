import React from 'react'
import { Modal } from 'antd';

const modal = (props) => {
    return(
        <Modal 
            title={props.heading}
            visible={props.showModal}
            onOk={props.okClick}
            onCancel={props.cancelClick}
            okText="Ok"
            cancelText="Cancel"
            okType={props.okBType}
            cancelType={props.cancelBType}
        >
            {props.children}
        </Modal>
    )
}

export default modal
