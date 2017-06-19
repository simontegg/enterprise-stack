import { createComponent } from 'react-fela'

const rule = ({ backgroundColor }) => ({
  backgroundColor,
  'grid-column': 'sider-start / content-start',
  'grid-row': 'content-start / last'
})

export default createComponent(rule, 'aside')
