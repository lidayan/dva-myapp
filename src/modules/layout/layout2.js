import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'
import { Link } from 'react-router';  
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import "./index.css"
import apps from '../../models/apps'

export default class Layout2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: require('../../config.json').apps
    };
  }

  selectItem(item){
    console.log('select: '+item.key)
  }

  render(){
    this.state.curApp = this.state.apps[this.props.params.app];
    this.state.modules = this.state.curApp.modules;
    this.state.curModule = this.state.modules[this.props.params.module]
    if (this.props.params.module === undefined || this.props.params.module === null) {
      for (var key in this.state.modules) break;
      this.state.curModule = this.state.modules[key];
    }

    // 设置列表
    let items = [];
    for(let i in this.state.modules){
      let the_module = this.state.modules[i];
      let ll = "/" + this.state.curApp.key +'/'+ the_module.key;
      items.push(<Menu.Item key={the_module.key}><Link to={ll}>{the_module.name}</Link></Menu.Item>);
    }

    // 设置 默认
    if (this.state.curModule == undefined || this.state.curModule == null) {
      for (var key in this.state.modules) break;
      this.state.curModule = this.state.modules[key];
    }

    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[this.state.curModule.key]}
            style={{ height: '100%' }}
            onSelect={this.selectItem}
          >
              {items}
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}