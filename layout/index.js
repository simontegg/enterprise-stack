const debug = require('debug')('vf:layout')
// components
import Head from 'next/head'
import {
  // Grid,
  Icon,
  Image,
  Menu,
  Popup,
  Segment,
  Sidebar
} from 'semantic-ui-react'

import getRenderer from '../styles/fela'
// const { Column, Row } = Grid

// layout
import Grid from './grid'
import Header from './header'
import Sider from './sider'
import Logo from './logo'
import Content from './content'
import SideMenu from './side-menu'

// icons
import MdDashboard from '../components/icons/md-dashboard'
import MdPerson from '../components/icons/md-person'
import MdSettings from '../components/icons/md-settings'
import MdArrowDropDown from '../components/icons/md-arrow-drop-down'
import MdCollection from '../components/icons/md-collections-bookmark'
import MdComment from '../components/icons/md-comment'
import MdGroup from '../components/icons/md-group'

// styles
import style from './layout.less'
import {
  textColorDark,
  fontSizeBase,
  fontSizeLg,
  primary1,
  primary2,
  primary5,
  primary6
} from '../styles/theme'

const title = <h4>Ashlyn Baum</h4>

export default ({ children }) =>
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <Grid>
      <Logo>
        <Image src='/static/Accreditron.jpg' size='tiny' />
      </Logo>
      <Header>
        <Popup
          trigger={
            <a href='#'>
              <Image
                avatar
                size='mini'
                src='https://pbs.twimg.com/profile_images/749417865153875968/kKSDIGnY_400x400.jpg'
              />
            </a>
          }
          content={title}
          on='click'
          position='bottom right'
        />
      </Header>
      <Sider>
        <SideMenu />
      </Sider>
      <Content backgroundColor={primary1}>
        {children}
      </Content>
    </Grid>
  </div>
