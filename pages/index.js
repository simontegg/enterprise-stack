if (process.browser) {
  localStorage.debug = 'vf:*'
}

// import withData from '../apollo/with-data'
import Head from 'next/head'
import { AutoSizer } from 'react-virtualized'
import { Provider } from 'react-fela'

import Layout from '../layout'
import OrganizationList from '../organizations'

import styles from '../node_modules/antd/lib/style/index.less'
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

export default props => (
  <AutoSizer>
    {({ height, width }) => {
      const h = height || 1080
      const w = width || 1920
      return (
        <Provider renderer={getRenderer()}>
          <div>
            <Head>
              <style dangerouslySetInnerHTML={{ __html: styles }} />
            </Head>
            <Layout width={width}>
              <OrganizationList />
            </Layout>
          </div>
        </Provider>
      )
    }}
  </AutoSizer>
)
