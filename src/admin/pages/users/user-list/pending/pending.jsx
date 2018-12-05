import React from 'react'
import { Table, Divider } from 'antd';

const newUsers = (props) => {

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
                <a onClick={() => props.approveUser(record._id)}>Approve</a>
                <Divider type="vertical" />
                <a onClick={() => props.openDrawer(record._id)}>View</a>
            </span>
        ),
    }];

    const user = props.users.filter((user) => user.approval === 'pending')
    if(user.length === 0){
        return null
    }else {
        return (
            <Table 
                columns={columns} 
                dataSource={user} 
                rowKey={record => record._id} 
                title={() => <h3><b>Pending Users</b></h3>}
                bordered
                pagination={false}
                className={props.classValue}
            />
        )
    }
}


export default newUsers