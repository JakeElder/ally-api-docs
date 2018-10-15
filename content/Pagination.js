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
        All top-level API resources have support for bulk fetches via "list" API methods. For instance, you can list actors, stories and messages. These list API methods share a common structure, taking at least these two parameters: <Code>limit</Code> and <Code>page-number</Code>.
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
            id="page-number"
            type="optional string"
            description="The page of objects to be returned."
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
              id="total-count"
              type="integer"
              description="The total number of resources matching the current query."
            />
            <Param
              id="page-number"
              type="integer"
              description="The current page number."
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
