const debug = require('debug')('vf:organizations:index')
import { gql, graphql } from 'react-apollo'
import { map, merge } from 'ramda'

import Head from 'next/head'
import { Table } from 'antd'

import style from './organizations.less'
import { bodyBackground } from '../styles/theme'

const forStatic = [
  { name: 'test' },
  { name: 'test1' },
  { name: 'test2' },
  { name: 'test3' },
  { name: 'test4' },
  { name: 'test5' },
  { name: 'test6' },
  { name: 'test7' },
  { name: 'test8' },
  { name: 'test9' },
  { name: 'test10' },
  { name: 'test11' },
  { name: 'test12' },
  { name: 'test13' },
  { name: 'test14' },
  { name: 'test15' },
  { name: 'test16' },
  { name: 'test17' },
  { name: 'test18' },
  { name: 'test19' },
  { name: 'test20' }
]

const AGENTS_PER_PAGE = 10
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
]
// const addKeys = map(organization =>
//  merge(organization, { key: organization.id })
// )

const addKeys = map(organization =>
  merge(organization, { key: organization.name })
)
function OrganizationList ({ organizations = forStatic, loading }) {
  return (
    <div>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </Head>
      {loading
        ? <div>Loading</div>
        : <div style={{ backgroundColor: bodyBackground }}>
            <Table columns={columns} dataSource={addKeys(organizations)} />
          </div>}
    </div>
  )
}

// for static
export default OrganizationList

// export default graphql(
//  gql`
//  query allOrganizations($first: Int!) {
//    allOrganizations(first: $first, orderBy: NAME_ASC) {
//      nodes {
//        id,
//        name
//    }
//    }
//  }`,
//  {
//    options: {
//      variables: {
//        first: AGENTS_PER_PAGE
//      }
//    },
//    props: ({ data: { allOrganizations: { nodes }, loading } }) => ({
//      organizations: nodes,
//      loading
//    })
//  }
// )(OrganizationList)
