import withData from '../apollo/with-data'
import App from '../components/app'
import Header from '../components/header'

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} />
  </App>
))
