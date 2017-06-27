import { createComponent } from 'react-fela'

const image = ({ size, marginLeft, marginTop }) => ({
  width: `${size}px`,
  height: `${size}px`,
  marginLeft: `${marginLeft}px`,
  marginTop: `${marginTop}px`
})

export default createComponent(image, 'img', ['src'])
