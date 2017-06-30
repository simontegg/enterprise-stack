import ui from 'redux-ui'
import Proptypes from 'prop-types'

import { Menu, MenuItem } from '../components/menu'
import Router from 'next/router'
import Link from 'next/link'


import { map } from 'ramda'


const SideMenu = ({ menuItems, activeView }) => {
  return (
    <Menu>
      {map(({ name, route }) =>
        <MenuItem
          key={name}
          name={name}
          active={route.query.view === activeView}
          onClick={() => Router.push(route)}
        >
          {name}
        </MenuItem>
      )(menuItems)}
    </Menu>
  )
}

export default SideMenu
