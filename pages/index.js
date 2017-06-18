if (process.browser) {
  localStorage.debug = 'vf:*'
}
const debug = require('debug')('vf:index')

// import withData from '../apollo/with-data'
import Head from 'next/head'
// import { AutoSizer } from 'react-virtualized'
import { Provider } from 'react-fela'

import Layout from '../layout'
//import OrganizationList from '../organizations'

import getRenderer from '../styles/fela'

// react apollo
// export default withData(props => (
//   <div                                                                                                                                                                                                                                                                                                                                                         >
//     <Head>
//       <style dangerouslySetInnerHTML={{ __html: styles }} />
//     </Head>
//     <Layout>
//       <OrganizationList />
//     </Layout>
//   </div>
// ))

export default props =>
  <Provider renderer={getRenderer()}>
    <Layout />
  </Provider>
