import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  backgroundColor,
  gridColumnStart: 'content-start',
  gridColumnEnd: 'last',
  gridRowStart: 'content-start',
  gridRowEnd: 'last'
})

export default createComponent(rule, 'content')
