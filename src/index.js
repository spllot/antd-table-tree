import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Table} from 'antd';
import 'antd/dist/antd.css';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: '12%',
}, {
  title: 'Address',
  dataIndex: 'address',
  width: '30%',
  key: 'address',
}];
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        key: 1,
        name: '第1行',
        age: 60,
        address: 'New York No. 1 Lake Park',
        children: [{
          key: 11,
          name: '第1.1行',
          age: 42,
          address: 'New York No. 2 Lake Park',
        }],
      }, {
        key: 2,
        name: '第2.1行',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }]
    }
  }
  change = () => {
    let newData = [{
      key: 1,
      name: '第1行',
      age: 60,
      address: 'New York No. 1 Lake Park ',
      children: [{
        key: 11,
        name: '第1.1行',
        age: 42,
        address: 'New York No. 2 Lake Park',
      }, {
        key: 2,// 改变key后显示的为理想状态
        name: '第2行变为第1.2行',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      }],
    }]
    this.setState({
      data: newData
    })
  }

  render() {
    return (<div>
      <Button onClick={this.change}>change</Button>
      <Table columns={columns} dataSource={this.state.data} />
    </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));