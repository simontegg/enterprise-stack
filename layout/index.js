// components
import Head from 'next/head'
import { Affix, Col, Menu, Icon, Row } from 'antd'
import { Provider } from 'react-fela'
import Image from '../components/image'
import MdDashboard from '../components/icons/md-dashboard'

// styles
import style from './layout.less'
import { textColorDark, fontSizeLg } from '../styles/theme'
import getRenderer from '../styles/fela'

// layout
import GridLayout from 'react-grid-layout'
const layout = [
  { i: 'top-corner', x: 0, y: 0, w: 1, h: 0.5, static: true },
  { i: 'header', x: 1, y: 0, w: 8, h: 0.5, static: true },
  { i: 'sider', x: 0, y: 0.5, w: 1, h: 8, static: true },
  { i: 'content', x: 1, y: 0.5, w: 8, h: 8, static: true }
]

export default ({ children }) => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <Provider renderer={getRenderer()}>
      <GridLayout
        className='layout'
        layout={layout}
        rowHeight={150}
        width={2000}
      >
        <div key='top-corner'>
          <Image src='/static/Accreditron.jpg' size={64} />
        </div>
        <div key='header'>
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' />
          </Menu>
        </div>
        <div key='sider'>
          <Affix>
            <Menu theme='dark' mode='inline' defaultSelectedKeys={['a']}>
              <Menu.Item key='a'>
                <MdDashboard
                  size={fontSizeLg}
                  marginRight={parseInt(fontSizeLg) * 1.25}
                  color={textColorDark}
                />
                <span>Dashboard</span>
              </Menu.Item>
            </Menu>
          </Affix>
        </div>
        <div key='content'>
          {children}
        </div>
      </GridLayout>
    </Provider>
  </div>
)
