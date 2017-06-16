// components
import Head from 'next/head'
import { Affix, Col, Layout, Menu, Icon, Row } from 'antd'
const { Content, Header, Sider } = Layout
import { Provider } from 'react-fela'
import Image from '../components/image'
import MdDashboard from '../components/icons/md-dashboard'

// styles
import style from './layout.less'
import { textColorDark, fontSizeLg } from '../styles/theme'
import getRenderer from '../styles/fela'

const renderer = getRenderer()
renderer.renderStatic(style)

export default ({ children }) => (
  <div>
    <Provider renderer={getRenderer()}>
      <Layout>
        <Layout>
          <Header>
            <Row
              align='middle'
              type='flex'
              justify='space-around'
              style={{ height: 64 }}
            >
              <Col span={3}>
                <Image src='/static/Accreditron.jpg' size={64} />
              </Col>
              <Col span={21}>
                <Menu
                  theme='dark'
                  mode='horizontal'
                  defaultSelectedKeys={['5']}
                >
                  <Menu.Item key='1' />
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
              <Menu theme='dark' mode='inline' defaultSelectedKeys={['a']}>
                <Menu.Item key='b'>
                  <MdDashboard
                    size={fontSizeLg}
                    marginRight={parseInt(fontSizeLg) * 1.25}
                    color={textColorDark}
                  />
                  <span>Dashboard</span>
                </Menu.Item>
              </Menu>
            </Affix>
          </Sider>
          <Content> {children} </Content>
        </Layout>
      </Layout>
    </Provider>
  </div>
)
