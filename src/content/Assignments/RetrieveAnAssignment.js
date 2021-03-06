import React from 'react'
import Section from '../../components/Section'
import * as PrimaryContent from '../../components/PrimaryContent'
import * as SecondaryContent from '../../components/SecondaryContent'
import Code from '../../components/Code'
import CodeBlock from '../../components/CodeBlock'
import Spec from '../../components/Spec'
import Param from '../../components/Param'
import A from '../../components/A'
import assignmentObject from '../../example-responses/assignment-object.json'

const RetrieveAnAssignment = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Retrieve an assignment</PrimaryContent.Heading>
      <PrimaryContent.P>Retrieves the details of an assignment.</PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="id"
            isRequired
            description="The id of the assignment to retrieve"
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="GET">
        /assignments/&#123;id&#125;
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(assignmentObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default RetrieveAnAssignment
