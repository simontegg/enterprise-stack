import { createComponent } from 'react-fela'

const rule = () => ({
  'grid-column': 'content-start',
  'grid-row': 'content-start'
})

export default createComponent(rule, 'content')
