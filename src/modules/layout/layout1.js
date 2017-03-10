import { Layout, Menu, Breadcrumb, Icon} from 'antd';
import { Link } from 'react-router';  
import React from 'react'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import "./index.css"


export default class Layout1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: require('../../config.json').apps
    };
  }

  selectItem(item){
    console.log('select app:  ' + item.key)
    // this.state.curApp=this.state.apps[item.key];
  }

  render(){
    this.state.curApp = this.state.apps[this.props.params.app];
    if (this.props.params.app === undefined || this.props.params.app === null) {
      for (var key in this.state.apps) break;
      this.state.curApp = this.state.apps[key];
      let href= window.location.href, host = href.substring(href.indexOf("#") , 0);
      window.location.href = host + "#/"+ this.state.curApp.key;
    }

    let items = [];
    for(let i in this.state.apps){
      let app = this.state.apps[i]
      for (var first_module in app.modules) break;
      items.push(<Menu.Item key={app.key}><Link to={app.key}>{app.name}</Link></Menu.Item>);
    }

    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[this.state.curApp.key]}
            style={{ lineHeight: '64px' }}
            onSelect={this.selectItem}
          >
            {items}
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{this.props.params.app}</Breadcrumb.Item>
            <Breadcrumb.Item>{this.props.params.module}</Breadcrumb.Item>
          </Breadcrumb>
          {this.props.children}
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          chinaredstar.com ©2017
        </Footer>
      </Layout>
    );
  }
}