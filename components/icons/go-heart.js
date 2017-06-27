import { createComponent } from 'react-fela'
import Icon from 'react-icons/lib/go/heart'

const rule = ({ color, size }) => ({
  color,
  marginRight: `${parseInt(size)}px`
})

export default createComponent(rule, Icon, ['size'])
