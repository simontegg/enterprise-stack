import { createComponent } from 'react-fela'

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
