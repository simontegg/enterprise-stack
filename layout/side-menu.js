import { createComponent } from 'react-fela'
import ui from 'redux-ui'
import Proptypes from 'prop-types'

import { Icon, Header, Menu } from 'semantic-ui-react'
import Router from 'next/router'
import Link from 'next/link'

import { map } from 'ramda'


const SideMenu = (menuItems, activeRoute) =>
  <Menu fluid vertical pointing color='blue'>
    {map(({ key, Icon, name, route }) =>
      <Link href={route}>
        <Menu.Item
          borderless={false}
          key={key}
          name={name}
          active={route === activeRoute}
        >
          <Icon /> {name}
        </Menu.Item>
      </Link>
    )(menuItems)}
  </Menu>
export default SideMenu
