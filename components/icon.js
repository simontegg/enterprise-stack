import { createComponent } from 'react-fela'
import { Icon } from 'antd'

const rule = ({ type, size = 14, color }) => ({
  width: `${size}px`,
  height: `${size}px`,
  color
})

export default createComponent(rule, Icon, ['type'])
