const debug = require('debug')('vf:organizations:index')
import { gql, graphql } from 'react-apollo'
import { map, merge } from 'ramda'

import Head from 'next/head'
import { Table, Icon } from 'semantic-ui-react'

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

const addKeys = map(organization =>
  merge(organization, { key: organization.name })
)

function OrganizationList ({ data }) {
  const allOrganizations = data.allOrganizations || {}
  const nodes = allOrganizations.node || []

  return (
    <div>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </Head>
      {null
        ? <div>Loading</div>
        : <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>Organisations</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {map(({ name }) =>
                <Table.Row>
                  <Table.Cell>{name}</Table.Cell>
                </Table.Row>
              )(nodes)}
            </Table.Body>

          </Table>}
    </div>
  )
}

// // for static
// export default OrganizationList

export default graphql(
  gql`
 query allOrganizations($first: Int!) {
   allOrganizations(first: $first, orderBy: NAME_ASC) {
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
    props: ({ data }) => ({
      data
      // organizations: nodes,
      // loading
    })
  }
)(OrganizationList)
