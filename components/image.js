import { createComponent } from 'react-fela'

const image = ({ src, size }) => ({
  width: `${size}px`,
  height: `${size}px`,
  verticalAlign: 'bottom'
})

export default createComponent(image, 'img', ['src'])
