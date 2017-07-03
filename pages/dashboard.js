if (process.browser) {
  localStorage.debug = 'vf:*'
}
const debug = require('debug')('vf:index')

import withData from '../apollo/with-data'
import Head from 'next/head'
import { Provider, ThemeProvider } from 'react-fela'
import theme from '../styles/fela-theme'

import Layout from '../layout'
import CardExample from '../dashboard/card-example'
import OrganizationList from '../organizations'

import getRenderer from '../styles/fela'

export default ({ url }) =>
  <Provider renderer={getRenderer()}>
    <ThemeProvider theme={theme}>
      <Layout url={url} >
      </Layout>
    </ThemeProvider>
  </Provider>
