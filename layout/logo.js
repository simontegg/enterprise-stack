import { createComponent } from 'react-fela'

// TODO: no shorthand
const rule = ({ backgroundColor }) => ({
  backgroundColor,
  display: 'flex',
  justifyContent: 'flex-start',
  gridColumnStart: 'sider-start',
  gridColumnEnd: 'content-start',
  gridRowStart: 'header-start',
  gridRowEnd: 'content-start',
  cursor: 'pointer'
})

export default createComponent(rule, 'aside')
// justifyContent: 'center',
// gridColumnStart: 'sider-start',
// gridColumnEnd: 'content-start',
// gridRowStart: 'header-start',
// gridRowEnd: 'content-start',
