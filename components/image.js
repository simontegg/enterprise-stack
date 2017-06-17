import { createComponent } from 'react-fela'

const image = ({ src, size }) => ({
  width: `${size}px`,
  height: `${size}px`
})

export default createComponent(image, 'img', ['src'])
