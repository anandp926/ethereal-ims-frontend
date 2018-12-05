import React from 'react'
import { Table, Divider } from 'antd';

const approved = (props) => {

    const columns = [{
        title: 'Id',
        dataIndex: '_id',
        key: '_id',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    }, {
        title: 'Group',
        dataIndex: 'group',
        key: 'group',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a onClick={() => props.openDrawer(record._id)}>View</a>
            </span>
        ),
    }];

    const user = props.users.filter((user) => user.approval === 'approved')
    if(user.length !== 0){
        return (
            <Table 
                columns={columns} 
                dataSource={user} 
                rowKey={record => record._id} 
                title={() => <h3><b>Approved Users</b></h3>}
                bordered
                pagination={false}
                className={props.classValue}
            />
        )
    }else {
        return null
    }
}


export default approved