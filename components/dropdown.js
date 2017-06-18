import { Dropdown } from 'antd'
import { createComponent } from 'react-fela'

const rule = () => ({})

const StyledDropdown = ({ children, marginRight, overlay, trigger }) =>
  <Dropdown overlay={overlay} trigger={trigger}>
    <a className='ant-dropdown-link' style={{ marginRight }} href='#'>
      {children}
    </a>
  </Dropdown>

export default createComponent(rule, StyledDropdown, [
  'marginRight',
  'overlay',
  'trigger'
])
