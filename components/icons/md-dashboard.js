import { createComponent } from 'react-fela'
import Icon from 'react-icons/lib/md/dashboard'

const rule = ({ color, marginRight }) => ({
  color,
  marginRight: `${marginRight}px`
})

export default createComponent(rule, Icon, ['size'])
