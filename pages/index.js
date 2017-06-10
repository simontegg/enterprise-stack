import App from '../components/app'
import Head from 'next/head'

import styles from '../styles/index.less'
import withData from '../apollo/with-data'

export default withData(props => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </Head>
    <App />
  </div>
))
