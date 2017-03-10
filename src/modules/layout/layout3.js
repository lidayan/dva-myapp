import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react'
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import "./index.css"
import BugChangeList from '../bugs/changes'

export default class Layout2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curModule: this.props.params.module,
      curApp: this.props.params.app
    };
  }
  render(){

    if ( this.props.params.app == 'duliang' & this.props.params.module == 'changes' ){
      return (
        <BugChangeList />
      )
    }
    return (
      <dev>{this.props.params.app}/{this.props.params.module} </dev>
      // <App1Module1 />
    )
  }
}