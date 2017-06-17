import { createComponent } from 'react-fela'
import Icon from 'react-icons/lib/md/dashboard'

const rule = ({ color, size }) => ({
  color,
  marginRight: `${parseInt(size)}px`
})

export default createComponent(rule, Icon, ['size'])
