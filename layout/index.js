const debug = require('debug')('vf:layout')
// components
import Head from 'next/head'
import { Affix, Avatar, Dropdown, Menu, Icon } from 'antd'

// layout
import Grid from './grid'
import Header from './header'
import Sider from './sider'
import Logo from './logo'
import Content from './content'

import Image from '../components/image'
import MdDashboard from '../components/icons/md-dashboard'
import MdPerson from '../components/icons/md-person'
import MdSettings from '../components/icons/md-settings'

// styles
import style from './layout.less'
import { textColorDark, fontSizeLg, primary5, primary6 } from '../styles/theme'
import getRenderer from '../styles/fela'

const menu = (
  <Menu>
    <Menu.Item key='0'>
      <MdPerson size={fontSizeLg} />My Profile
    </Menu.Item>
    <Menu.Item key='1'>
      <MdSettings size={fontSizeLg} /> Settings
    </Menu.Item>
  </Menu>
)

export default ({ width, children }) => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <Grid width={width}>
      <Logo backgroundColor={primary5}>
        <Image src='/static/Accreditron.jpg' size={64} />
      </Logo>
      <Header backgroundColor={primary6}>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className='ant-dropdown-link' href='#'>
            <Avatar
              shape='round'
              size='large'
              src='https://pbs.twimg.com/profile_images/749417865153875968/kKSDIGnY_400x400.jpg'
            />

          </a>
        </Dropdown>
      </Header>
      <Sider>
        <Affix>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['a']}>
            <Menu.Item key='a'>
              <MdDashboard size={fontSizeLg} color={textColorDark} />
              <span>Dashboard</span>
            </Menu.Item>
          </Menu>
        </Affix>
      </Sider>
      <Content>
        {children}
      </Content>
    </Grid>
  </div>
)
