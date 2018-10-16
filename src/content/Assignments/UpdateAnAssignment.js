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

const UpdateAnAssignment = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Update an assignment</PrimaryContent.Heading>
      <PrimaryContent.P>Updates the specified assignment.</PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="description"
            type="optional"
            description="A short description of the assignment."
          />
          <Param
            id="scopes"
            type="optional"
            description="An array of scope ids to attach."
          />
          <Param
            id="assignee"
            type="optional"
            description="The email address of the team member to which the assignment should be made."
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="POST">
        /assignments/&#123;id&#125;
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(assignmentObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default UpdateAnAssignment

