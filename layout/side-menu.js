import { createComponent } from 'react-fela'
import { Icon, Header, Menu } from 'semantic-ui-react'

import { map } from 'ramda'

import MdDashboard from '../components/icons/md-dashboard'
import MdCollection from '../components/icons/md-collections-bookmark'
import MdComment from '../components/icons/md-comment'
import MdGroup from '../components/icons/md-group'

const rule = () => ({
  boxShadow: 'none !important'
})

const SMenu = createComponent(rule, 'div')

class SideMenu extends React.Component {
  state = { active: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ active: name })

  render () {
    const { active } = this.state
    return (
      <Menu as={SMenu} fluid vertical pointing color='blue'>
        <Menu.Item
          borderless={false}
          key='dashboard'
          name='dashboard'
          active={'dashboard' === active}
          onClick={this.handleItemClick}
        >
          <MdDashboard size={16} /> Dashboard
        </Menu.Item>
        <Menu.Item
          borderless={false}
          key='providers'
          name='providers'
          active={'providers' === active}
          onClick={this.handleItemClick}
        >
          <MdGroup size={16} /> Providers
        </Menu.Item>
        <Menu.Item
          key='portfolio'
          name='portfolio'
          active={'portfolio' === active}
          onClick={this.handleItemClick}
        >
          <MdCollection size={16} /> Portfolio
        </Menu.Item>
        <Menu.Item
          key='activity'
          name='activity'
          active={'activity' === active}
          onClick={this.handleItemClick}
        >
          <MdComment size={16} /> Activity
        </Menu.Item>
      </Menu>
    )
  }
}

export default SideMenu
