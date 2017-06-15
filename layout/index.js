import Head from 'next/head'
import { Affix, Layout, Menu, Icon } from 'antd'
const { Content, Header, Sider } = Layout

import style from './layout.less'

export default ({ children }) => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <Layout>
      <Header>
        <Menu mode='horizontal' theme='dark' style={{ lineHeight: '64px' }}>
          <Menu.Item key='1'>
            <Icon type='user' /> My Account
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='heart' /> Heart
          </Menu.Item>
          <Menu.Item key='3'>
            <Icon type='area-chart' /> Data
          </Menu.Item>
          <Menu.Item key='4'>
            <Icon type='file-text' /> Documents
          </Menu.Item>
          <Menu.Item key='5'>
            <Icon type='inbox' /> Inbox
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider breakpoint='lg' collapsedWidth='0' style={{ overflow: 'auto' }}>
          <Affix offsetTop={10}>
            <Menu theme='light' mode='inline' defaultSelectedKeys={['5']}>
              <Menu.Item key='1'>
                <Icon type='user' /> My Account
              </Menu.Item>
              <Menu.Item key='2'>
                <Icon type='heart' /> Heart
              </Menu.Item>
              <Menu.Item key='3'>
                <Icon type='area-chart' /> Data
              </Menu.Item>
              <Menu.Item key='4'>
                <Icon type='file-text' /> Documents
              </Menu.Item>
              <Menu.Item key='5'>
                <Icon type='inbox' /> Inbox
              </Menu.Item>
            </Menu>
          </Affix>
        </Sider>
        <Layout>
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
)
