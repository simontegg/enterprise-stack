import { createComponent } from 'react-fela'
import Icon from 'react-icons/lib/md/comment'

const rule = ({ color = 'inherit', size }) => ({
  color,
  marginRight: `${parseInt(size)}px`
})

export default createComponent(rule, Icon, ['size'])
