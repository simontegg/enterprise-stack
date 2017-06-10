const debug = require('debug')('vf:organizations:index')
import { gql, graphql } from 'react-apollo'
import Head from 'next/head'
import { Table } from 'antd'

import style from './organizations.less'

const AGENTS_PER_PAGE = 10

function OrganizationList (props) {
  debug(props)
  return (
    <div>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </Head>
      {props ? <div>Loading</div> : <div>Loaded</div>}
    </div>
  )
}

export default graphql(
  gql`
  query allOrganizations($first: Int!) {
    allOrganizations(first: $first) {
      nodes {
        id,
        name
    }
    }
  }`,
  {
    options: {
      variables: {
        first: AGENTS_PER_PAGE
      }
    },
    props: ({ data: { allOrganizations: { nodes }, loading } }) => ({
      organizations: nodes,
      loading
    })
  }
)(OrganizationList)
