import React from 'react'
import { Layout} from 'antd';
const {Sider} = Layout

const AppSider = (props) => {
    return(
            <Sider 
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={(collapsed) => {props.content_slider(collapsed)}}
                className="sider"
                {...props}
                >
                {props.children}
            </Sider>
    );
}

export default AppSider