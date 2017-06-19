import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  padding: '1em',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor,
  'grid-column': 'sider-start / span 2',
  'grid-row': 'header-start'
})

export default createComponent(rule, 'header')
