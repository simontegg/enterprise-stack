import { connect } from 'react-fela'
import ui from 'redux-ui'
import Proptypes from 'prop-types'

import { Icon, Header, Menu } from 'semantic-ui-react'
import Router from 'next/router'
import Link from 'next/link'

import { map } from 'ramda'

const main = props => ({ boxShadow: 'none !important' })

const SideMenu = ({ menuItems, activeView, styles: { main } }) => {

  return <Menu className={main} fluid vertical pointing >
    {map(({ Icon, name, route }) =>
      <Menu.Item
        key={name}
        name={name}
        active={route.query.view === activeView}
        onClick={() => Router.push(route)}
      >
        {name}
      </Menu.Item>
    )(menuItems)}
  </Menu>
}

export default connect({ main })(SideMenu)
