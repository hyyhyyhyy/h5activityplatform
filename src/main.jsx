import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Loadable from 'react-loadable';
import UploadComponent from './uploadComponent';
import Config from "../config.json";
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';


// const { Layout, Menu, Icon } = antd;
const SubMenu = Menu.SubMenu;

const { Header, Content, Footer, Sider } = Layout;




class Main extends React.Component {
    Loading() { return "............loading......." }
    LoadableComponent(f) {
        return Loadable({
            loader: f,
            loading: this.Loading,
        });
    }
    getRoute(list, type) {
        return list.map((item, i) => {
            let _path = "/" + type + "/" + item.name;
            let _importPath = `./${type}/${item.name}/indexmd`
            return <Route exact path={_path} component={this.LoadableComponent(() => import(`${_importPath}`))} key={i}></Route>
        })
    }

    render() {
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/uploadComponent' component={UploadComponent} />
                    {this.getRoute(Config.business, 'business')}
                    {this.getRoute(Config.common, 'common')}
                    {this.getRoute(Config.other, 'other')}
                </Content>
            </div>
        )
    }
}
export default Main;