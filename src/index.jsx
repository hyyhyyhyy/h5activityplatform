import React from 'react';
import ReactDOM from 'react-dom';
import LeftMenu from "./leftMenu";
import Main from "./main";
import "./index.scss";
import { HashRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

// const { Layout, Menu, Icon } = antd;
const SubMenu = Menu.SubMenu;
import SearchBar from "../components/search/search"

const { Header, Content, Footer, Sider } = Layout;
class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            collapsed: false
        }

    }

    render() {
        return (
            <Layout style={{ padding: '24px 0', background: '#fff', minHeight: '100vh' }}>
                <Sider width={300} style={{ background: '#fff' }} >
                    {/* <div className="logo" /> */}
                    <LeftMenu />
                </Sider>
                <Layout>
                    <SearchBar />
                    <Main />
                </Layout>
            </Layout >
        )
    }
}
ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'))