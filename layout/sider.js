import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  backgroundColor,
  gridColumnStart: 'sider-start',
  gridColumnEnd: 'content-start',
  gridRowStart: 'content-start',
  gridRowEnd: 'last',
})

export default createComponent(rule, 'aside')
