import { createComponent } from 'react-fela'

const rule = ({ width }) => ({
  display: 'grid',
  width: `${width}px`,
  'grid-template-columns': '[sider-start] 200px [content-start] 1fr',
  'grid-template-rows': '[header-start] 64px [content-start] 1fr'
})

export default createComponent(rule, 'div')
