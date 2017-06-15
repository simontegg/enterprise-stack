// components
import Head from 'next/head'
import { Affix, Col, Layout, Menu, Icon, Row } from 'antd'
const { Content, Header, Sider } = Layout
import { Provider } from 'react-fela'
import Image from '../components/image'

// styles
import style from './layout.less'
import getRenderer from '../styles/fela'

export default ({ children }) => (
  <div>
    <Head> <style dangerouslySetInnerHTML={{ __html: style }} /> </Head>
    <Provider renderer={getRenderer()}>
      <Layout>
        <Layout>
          <Header>
            <Row align='middle' type='flex' justify='space-around'>
              <Col span={2}>
                <Image src='/static/Accreditron.jpg' size={64} />
              </Col>
              <Col span={22}>
                <Menu
                  theme='dark'
                  mode='horizontal'
                  defaultSelectedKeys={['5']}
                >
                  <Menu.Item key='1'>
                    <Icon type='user' /> My Account
                  </Menu.Item>
                  <Menu.Item key='2'> <Icon type='heart' /> Heart </Menu.Item>
                  <Menu.Item key='3'>
                    <Icon type='area-chart' /> Data
                  </Menu.Item>
                  <Menu.Item key='4'>
                    <Icon type='file-text' /> Documents
                  </Menu.Item>
                  <Menu.Item key='5'> <Icon type='inbox' /> Inbox </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
        </Layout>
        <Layout>
          <Sider
            breakpoint='lg'
            collapsedWidth='0'
            style={{ overflow: 'auto' }}
          >
            <Affix>
              <Menu theme='light' mode='inline' defaultSelectedKeys={['a']}>
                <Menu.Item key='a'> <Icon type='user' /> My Account </Menu.Item>
                <Menu.Item key='b'> <Icon type='heart' /> Heart </Menu.Item>
                <Menu.Item key='c'> <Icon type='area-chart' /> Data </Menu.Item>
                <Menu.Item key='d'>
                  <Icon type='file-text' /> Documents
                </Menu.Item>
                <Menu.Item key='e'> <Icon type='inbox' /> Inbox </Menu.Item>
              </Menu>
            </Affix>
          </Sider>
          <Content> {children} </Content>
        </Layout>
      </Layout>
    </Provider>
  </div>
)
