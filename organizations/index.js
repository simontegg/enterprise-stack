// TODO remove semantic
const debug = require('debug')('vf:organizations:index')
import { gql, graphql } from 'react-apollo'
import { map, merge } from 'ramda'

import Head from 'next/head'
import { Table, Icon } from 'semantic-ui-react'

import style from './organizations.less'



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

function OrganizationList ({ allOrganizations, loading }) {
  console.log("loading", loading)
  return (
    <div>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </Head>
      <label> Create a new organization </label>
      <input type="text" name="org"/>
      {loading
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
              )(allOrganizations.nodes)}
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
    props: ({ data }) => {
      return{
        allOrganizations : data.allOrganizations || {},
        // nodes : allOrganizations.nodes || [],
      // data,
      // organizations: nodes,
      loading : data.loading
      }
    }
  }
)(OrganizationList)

