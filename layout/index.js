const debug = require('debug')('vf:layout')
// components
import Head from 'next/head'

import getRenderer from '../styles/fela'
// const { Column, Row } = Grid

// layout
import Grid from './grid'
import Header from './header'
import Image from '../components/image'
import Sider from './sider'
import Logo from './logo'

import Content from './content'
import SideMenu from './side-menu'

// icons
import MdAttachMoney from '../components/icons/md-attach-money'
import MdDashboard from '../components/icons/md-dashboard'
import MdPerson from '../components/icons/md-person'
import MdNaturePeople from '../components/icons/md-nature-people'
import MdRecentActors from '../components/icons/md-recent-actors'
import GoHeart from '../components/icons/go-heart'
import MdSettings from '../components/icons/md-settings'
import MdArrowDropDown from '../components/icons/md-arrow-drop-down'
import MdCollection from '../components/icons/md-collections-bookmark'
import MdComment from '../components/icons/md-comment'
import MdGroup from '../components/icons/md-group'

const menuItems = [
  {
    name: 'Test',
    Icon: MdDashboard,
    route: { pathname: '/dashboard', query: { view: '' } }
  },
  {
    name: 'Services',
    Icon: MdNaturePeople,
    route: { pathname: '/dashboard', query: { view: 'services' } }
  },
  {
    name: 'Governance',
    Icon: MdRecentActors,
    route: { pathname: '/dashboard', query: { view: 'governance' } }
  },
  {
    name: 'Staffing',
    Icon: MdGroup,
    route: { pathname: '/dashboard', query: { view: 'staffing' } }
  },
  {
    name: 'Contacts',
    Icon: MdGroup,
    route: { pathname: '/dashboard', query: { view: 'contacts' } }
  },
  {
    name: 'Health & Safety',
    Icon: GoHeart,
    route: { pathname: '/dashboard', query: { view: 'health' } }
  },
  {
    name: 'Financials',
    Icon: MdAttachMoney,
    route: { pathname: '/dashboard', query: { view: 'financials' } }
  },
  {
    name: 'Accreditation',
    Icon: MdGroup,
    route: { pathname: '/dashboard', query: { view: 'accreditation' } }
  }
]

const title = <h4>Ashlyn Baum</h4>

export default ({ children, url: { query: { view } } }) =>
  <div>
    <Head />
    <Grid>
      <Logo>
        <Image src='/static/AT.png' size={64} marginLeft={64} />
      </Logo>
      <Header />

      <Sider>
        <SideMenu menuItems={menuItems} activeView={view} />
      </Sider>
      <Content>
        {children}
      </Content>
    </Grid>
  </div>

// <Header>
//   <Popup
//     trigger={
//       <a href='#'>
//         <Image
//           avatar
//           size='mini'
//           src='https://pbs.twimg.com/profile_images/749417865153875968/kKSDIGnY_400x400.jpg'
//         />
//       </a>
//     }
//     content={title}
//     on='click'
//     position='bottom right'
//   />
// </Header>
