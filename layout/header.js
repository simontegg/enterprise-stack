import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  padding: '1em',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor,
  'grid-column-start': 'sider-start',
  'grid-column-end': 'last',
  'grid-row-start': 'header-start',
  'grid-row-end': 'content-start',
  boxShadow: '0 2px 5px rgba(0,0,0,.26)'
})

export default createComponent(rule, 'header')
