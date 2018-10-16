import React from 'react'
import * as PrimaryContent from '../components/PrimaryContent'
import * as SecondaryContent from '../components/SecondaryContent'
import Code from '../components/Code'
import Spec from '../components/Spec'
import Param from '../components/Param'
import A from '../components/A'
import CodeBlock from '../components/CodeBlock'
import HideyBox from '../components/HideyBox'
import listResponse from '../example-responses/list-response.json'
import Section from '../components/Section'

export default () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Pagination</PrimaryContent.Heading>
      <PrimaryContent.P>
        All top-level API resources have support for bulk fetches via "list" API methods. For instance, you can list actors, stories and messages. These list API methods share a common structure, taking at least these three parameters: <Code>limit</Code> <Code>starting_after</Code> and <Code>ending_before</Code>.
      </PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Attributes</PrimaryContent.SubHeading>
        <Spec id="pagination-attributes">
          <Param
            id="limit"
            type={<>optional, default is <Param.Em>10</Param.Em></>}
            description="A limit on the number of objects to be returned, between 1 and 100."
          />
          <Param
            id="starting_after"
            type="optional"
            description={
              <>
                A cursor for use in pagination. <Code>starting_after</Code> is an object Id that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order to fetch the next page of the list.
              </>
            }
          />
          <Param
            id="starting_before"
            type="optional"
            description={
              <>
                As above, but used to fetch the previous page of the list.
              </>
            }
          />
        </Spec>
      </PrimaryContent.Spec>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>List Response Format</PrimaryContent.SubHeading>
        <Spec id="list-attributes">
          <Param
            id="data"
            type="array"
            description="An array containing the actual response elements, paginated by any request parameters."
          />
          <Param
            id="pagination"
            type="hash"
            description="Hash with information on pagination."
          >
            <Param
              id="limit"
              type="integer"
              description="The limit supplied as a parameter, or 10 by default."
            />
            <Param
              id="total_count"
              type="integer"
              description="The total number of resources, regardless of any filtering criteria."
            />
            <Param
              id="matched_count"
              type="integer"
              description="The total number of resources matching the current query."
            />
            <Param
              id="has_more"
              type="boolean"
              description="Whether or not there are more elements available after this set."
            />
          </Param>
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(listResponse, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)
