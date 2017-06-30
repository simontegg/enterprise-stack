import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  backgroundColor,
  gridColumnStart: 'sider-start',
  gridColumnEnd: 'content-start',
  gridRowStart: 'content-start',
  gridRowEnd: 'last',
  boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.2)'
})

export default createComponent(rule, 'aside')
