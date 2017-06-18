const debug = require('debug')('vf:layout')
// components
import Head from 'next/head'
import { Icon, Image, Popup, Segment, Sidebar } from 'semantic-ui-react'

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
  primary2,
  primary5,
  primary6
} from '../styles/theme'
import getRenderer from '../styles/fela'

const title = <h4>Ashlyn Baum</h4>

export default ({ children }) =>
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </Head>
    <Grid>
      <Logo backgroundColor={primary5}>
        <Image src='/static/Accreditron.jpg' size='tiny' />
      </Logo>
      <Header backgroundColor={primary2}>
        <Popup
          trigger={
            <Image
              avatar
              size='mini'
              src='https://pbs.twimg.com/profile_images/749417865153875968/kKSDIGnY_400x400.jpg'
            />
          }
          content={title}
          on='click'
          position='bottom right'
        />
      </Header>
      <Sider />
      <Content>
        {children}
      </Content>
    </Grid>
  </div>
