import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor,
  'grid-column': 'content-start',
  'grid-row': 'header-start'
})

export default createComponent(rule, 'header')
