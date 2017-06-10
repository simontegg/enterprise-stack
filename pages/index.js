if (process.browser) {
  localStorage.debug = 'vf:*'
}

import withData from '../apollo/with-data'

import Head from 'next/head'
import OrganizationsList from '../organizations'

import styles from '../styles/index.less'

export default withData(props => (
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
    </Head>
    <OrganizationsList />
  </div>
))
