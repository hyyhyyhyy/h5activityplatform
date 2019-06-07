import React from 'react';
import { Link } from 'react-router-dom'

import Config from "../config.json";

import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

// const { Layout, Menu, Icon } = antd;
const SubMenu = Menu.SubMenu;

const { Sider } = Layout;
import SearchBar from "../components/search/search"
import { relative } from 'path';


export default class LeftMenu extends React.Component {

    getIcon(type) {
        if (type == "business") {
            return <Icon type="smile" theme="twoTone" />
        } else if (type == "common") {
            return <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
        } else if (type == "other") {
            return <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
        }
    }

    getSubMenus(list, type) {
        let tyNub;
        if (type == 'business') {
            tyNub = '1';
        } else if (type == 'common') {
            tyNub = '2';
        } else if (type == 'other') {
            tyNub = '3';
        }
        return (
            <SubMenu
                key={type}
                title={
                    <span>
                        {this.getIcon(type)}
                        <span>{this.getChineseName(type)}</span>
                    </span>
                }
            >
                {list.map((item, i) => {
                    return <Menu.Item key={tyNub + i}><Link to={"/" + type + "/" + item.name} replace>{`${item.name}  ${item.moduleNameChinese}`}</Link></Menu.Item>
                })}
            </SubMenu>
        )
    }

    getChineseName(name) {
        if (name == 'business') {
            return '业务'
        } else if (name == 'common') {
            return '通用'
        } else if (name == 'other') {
            return '其他'
        }

    }

    render() {
        return (
            <div >
                <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }}>
                    {this.getSubMenus(Config.business, "business")}
                    {this.getSubMenus(Config.common, "common")}
                    {this.getSubMenus(Config.other, "other")}
                </Menu>
            </div>
        )
    }
}
