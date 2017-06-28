const debug = require('debug')('vf:index')

// main
import React, { Component } from 'react'
import redirect from 'next-universal-redirect'
import withData from '../apollo/with-data'
import Head from 'next/head'
import { Provider } from 'react-fela'
//import { Container, Segment } from 'semantic-ui-react'

import Layout from '../layout'
import CardExample from '../dashboard/card-example'
//import OrganizationList from '../organizations'

import getRenderer from '../styles/fela'

class Index extends Component {
  render () {
    return (
      <Provider renderer={getRenderer()}>
        <Layout url={this.props.url} />
      </Provider>
    )
  }
}

const redirects = new Map()
redirects.set('/', '/dashboard')

// export default redirect(redirects)(withData(Index))
export default Index
