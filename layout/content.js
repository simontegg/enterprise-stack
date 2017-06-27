import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  paddingTop: '3rem',
  backgroundColor,
  gridColumnStart: 'content-start',
  gridColumnEnd: 'last',
  // gridRowStart: 'content-start',
  gridRowStart: 'header-start',
  gridRowEnd: 'last'
})

export default createComponent(rule, 'content')
