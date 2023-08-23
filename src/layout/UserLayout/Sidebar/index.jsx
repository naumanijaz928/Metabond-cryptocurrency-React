import React, { useState } from 'react'
import icon1 from '../../../assets/Images/side1.png'
import icon2 from '../../../assets/Images/side2.png'
import icon3 from '../../../assets/Images/side3.png'
import icon4 from '../../../assets/Images/side4.png'
import icon5 from '../../../assets/Images/side5.png'
import icon6 from '../../../assets/Images/side6.png'
import icon7 from '../../../assets/Images/side7.png'
import icon8 from '../../../assets/Images/side8.png'
import icon9 from '../../../assets/Images/side9.png'
// import "../styles.scss";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const SiderComponent = () => {
    const [collapsed, setCollapsed] = useState(true);
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    const toggle = () => { setCollapsed(!collapsed) }
    const layoutStyles = {
        common: {
            background: '#fff'
        },
        logo: {
            height: ' 32px',
            margin: '16px',
            marginTop:'30px',
            textAlign: 'center'
        },
        sidebarStyle: {
            background: '#fff'
        },
    }
    return (
        <Sider collapsible
            style={layoutStyles.sidebarStyle}
            collapsed={collapsed} onCollapse={toggle}>
            <div className="logo" style={layoutStyles.logo} >
                <span onClick={toggle}><MenuOutlined style={{ fontSize: '1rem', cursor: 'pointer' }} /></span>
            </div>
            <Menu theme="light" style={layoutStyles.common} mode="inline">
                <Menu.Item key="1" icon={<img src={icon1} />}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<img src={icon2} />}>
                    Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<img src={icon3} />}>
                    Option 3
                </Menu.Item>
                <Menu.Item key="4" icon={<img src={icon4} />}>
                    Option 4
                </Menu.Item>
                <Menu.Item key="5" icon={<img src={icon5} />}>
                    Option 5
                </Menu.Item>
                <Menu.Item key="6" icon={<img src={icon6} />}>
                    Option 6
                </Menu.Item>
                <Menu.Item key="7" icon={<img src={icon7} />}>
                    Option 7
                </Menu.Item>
                <Menu.Item key="8" icon={<img src={icon8} />}>
                    Option 8
                </Menu.Item>
                <SubMenu key="9" icon={<img src={icon9} />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>

            </Menu>
        </Sider>
    )
}
export default SiderComponent