import { createComponent } from 'react-fela'

const rule = () => ({
  'grid-column': 'sider-start / content-start',
  'grid-row': 'content-start'
})

export default createComponent(rule, 'aside')
