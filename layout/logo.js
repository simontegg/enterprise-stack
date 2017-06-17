import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  backgroundColor,
  display: 'flex',
  justifyContent: 'center',
  gridColumn: 'sider-start',
  gridRow: 'header-start'
})

export default createComponent(rule, 'aside')
