import { createComponent } from 'react-fela'

const rule = ({ width }) => ({
  display: 'grid',
  width: `${width}px`,
  height: '100vh',
  'grid-template-columns':
    '[sider-start] 200px [content-start] 1fr [last] auto',
  'grid-template-rows': '[header-start] 64px [content-start] 1fr [last] auto'
})

export default createComponent(rule, 'div')
