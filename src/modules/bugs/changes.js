import dva from 'dva';
import React from 'react';
import {Table, Select } from 'antd';


export default class BugChangeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apps: require('../../config.json').apps
    };
  }

  render() {
    
    const Option = Select.Option;
    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];

    return (
        <div>
          
          <div style={{padding: "20px"}}>
            <span>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a project"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </span>
            <span style={{padding:"20px"}}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={handleChange}
                filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </span>
          </div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    )
  }
}



