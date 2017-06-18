const debug = require('debug')('vf:layout')
// components
import Head from 'next/head'
import { Affix, Avatar, Card, Menu, Popover, Icon, Table } from 'antd'
import Image from '../components/image'

// layout
import Grid from './grid'
import Header from './header'
import Sider from './sider'
import Logo from './logo'
import Content from './content'

// icons
import MdDashboard from '../components/icons/md-dashboard'
import MdPerson from '../components/icons/md-person'
import MdSettings from '../components/icons/md-settings'
import MdArrowDropDown from '../components/icons/md-arrow-drop-down'

// styles
import style from './layout.less'
import {
  textColorDark,
  fontSizeBase,
  fontSizeLg,
  primary5,
  primary6
} from '../styles/theme'
import getRenderer from '../styles/fela'

const title = <h3>Ashlyn Baum</h3>


export default ({ width, children }) =>
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <Grid width={width}>
      <Logo backgroundColor={primary5}>
        <Image src='/static/Accreditron.jpg' size={64} />
      </Logo>
      <Header backgroundColor={primary6}>
        <Popover
          placement='bottomRight'
          title={title}
          trigger='click'
        >
          <Avatar
            style={{ marginRight: 24 }}
            shape='round'
            size='large'
            src='https://pbs.twimg.com/profile_images/749417865153875968/kKSDIGnY_400x400.jpg'
          />
        </Popover>
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
