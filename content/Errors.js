import React from 'react'
import * as PrimaryContent from '../components/PrimaryContent'
import * as SecondaryContent from '../components/SecondaryContent'
import * as DefinitionTable from '../components/DefinitionTable'
import Code from '../components/Code'
import Spec from '../components/Spec'
import Param from '../components/Param'
import A from '../components/A'
import Section from '../components/Section'

export default () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Errors</PrimaryContent.Heading>
      <PrimaryContent.P>
        Ally uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the <Code>2xx</Code> range indicate success. Codes in the <Code>4xx</Code> range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.). Codes in the <Code>5xx</Code> range indicate an error with Ally’s servers.
      </PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Attributes</PrimaryContent.SubHeading>
        <Spec>
          <Param
            key="error-attributes:code"
            id="code"
            type="string"
            description="A short code, describing the nature of the error."
          />
          <Param
            key="error-attributes:message"
            id="message"
            type="optional string"
            description="A human-readable message providing more details about the error."
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Heading>
        HTTP status code summary
      </SecondaryContent.Heading>
      <DefinitionTable.Root>
        <DefinitionTable.Entry
          term="200 - OK"
          description="Everything worked as expected."
        />
        <DefinitionTable.Entry
          term="404 - Not Found"
          description="The requested resource doesn't exist."
        />
        <DefinitionTable.Entry
          term="500 - Server Error"
          description="Something went wrong when processing the request."
        />
      </DefinitionTable.Root>
    </SecondaryContent.Root>
  </Section>
)
