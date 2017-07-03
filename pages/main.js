if (process.browser) {
  localStorage.debug = 'vf:*'
}
const debug = require('debug')('vf:index')

import withData from '../apollo/with-data'
import Head from 'next/head'
import { Provider } from 'react-fela'
import { Container, Segment } from 'semantic-ui-react'

import Layout from '../layout'
import CardExample from '../dashboard/card-example'
import OrganizationList from '../organizations'

import getRenderer from '../styles/fela'

export default ({ url }) =>
  <Provider renderer={getRenderer()}>
    <Layout url={url}>
      <Container>
      </Container>
    </Layout>
  </Provider>

