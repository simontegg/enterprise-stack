const debug = require('debug')('vf:organizations:index')
import { gql, graphql } from 'react-apollo'
import Head from 'next/head'
import { Table } from 'antd'

import style from './organizations.less'

const AGENTS_PER_PAGE = 10
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
]

function OrganizationList ({ organizations, loading }) {
  return (
    <div>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </Head>
      {loading
        ? <div>Loading</div>
        : <Table columns={columns} dataSource={organizations} />}
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
