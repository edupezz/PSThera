import React from 'react';

import { Menu, Input } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import {MenuContainer} from './styles';

const { SubMenu } = Menu;

function MobileHeader(screen){

    const userScreen = screen;

    const handleClick = e => {
        console.log('clicked ', e);
    };

    console.log(userScreen)

    return(
        <MenuContainer size={userScreen}>
            <Menu
                onClick={handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                style={{ 
                    width: userScreen,
                    lineHeight: "5vh",
                }}
            >
                <SubMenu key="sub4" 
                    icon={<MenuOutlined
                        style={{
                            color:"#BCBCCB",
                            }}
                />} title="Navigation Three">

                    <Input prefix={<SearchOutlined />}
                        style={{
                            boxSizing: 'border-box'
                        }} />

                    <Menu.Item key="9" 
                        style={{
                            color:"#C6C6D4"
                        }}
                        >HOME
                    </Menu.Item>

                    <Menu.Item key="10"
                        style={{
                            color:"#C6C6D4"
                        }}>ARTICLES
                    </Menu.Item>

                    <Menu.Item key="11"
                        style={{
                            color:"#C6C6D4"
                        }}>AUDIO
                    </Menu.Item>

                </SubMenu>

        </Menu>
    </MenuContainer>
    );
}

export default MobileHeader;