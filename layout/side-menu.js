import { connect } from 'react-fela'
import ui from 'redux-ui'
import Proptypes from 'prop-types'

import { Icon, Header, Menu } from 'semantic-ui-react'
import Router from 'next/router'
import Link from 'next/link'

import { map } from 'ramda'

const main = props => ({ boxShadow: 'none !important'})


const SideMenu = ({ menuItems, activeRoute, styles: { main } }) =>
  <Menu className={main} fluid vertical pointing color='blue'>
    {map(({ Icon, name, route }) =>
      <Menu.Item
        borderless={false}
        key={name}
        name={name}
        active={route === activeRoute}
        onClick={() => Router.push(route)}
        onMouseEnter={() => Router.prefetch(route)}
      >
        <Icon size={16} /> {name}
      </Menu.Item>
    )(menuItems)}
  </Menu>

export default connect({ main })(SideMenu)
