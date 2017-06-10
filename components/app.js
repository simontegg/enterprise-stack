import Head from 'next/head'
import { Layout, Menu, Table, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

import style from '../styles/components/app.less'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  },
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '4',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
]

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline'
  }
  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    })
  }
  render () {
    const { collapsed, mode } = this.state

    return (
      <div>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </Head>
        <Layout>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className='logo' />
            <Menu theme='dark' mode={mode} defaultSelectedKeys={['6']}>
              <SubMenu
                key='sub1'
                title={
                  <span>
                    <Icon type='user' /><span className='nav-text'>User</span>
                  </span>
                }
              >
                <Menu.Item key='1'>Tom</Menu.Item>
                <Menu.Item key='2'>Bill</Menu.Item>
                <Menu.Item key='3'>Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key='sub2'
                title={
                  <span>
                    <Icon type='team' /><span className='nav-text'>Team</span>
                  </span>
                }
              >
                <Menu.Item key='4'>Team 1</Menu.Item>
                <Menu.Item key='5'>Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key='6'>
                <span>
                  <Icon type='file' />
                  <span className='nav-text'>File</span>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content>
              <div style={{ backgroundColor: '#fff' }}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
