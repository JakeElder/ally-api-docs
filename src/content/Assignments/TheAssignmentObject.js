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

const TheAssignmentsObject = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>The assignment object</PrimaryContent.Heading>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Attributes</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="id"
            type="string"
            description="A unique identifier."
          />
          <Param
            id="description"
            type="string"
            description="A short description of the assignment."
          />
          <Param
            id="scopes"
            type="list"
            description="The scopes attached to the assignment."
          />
          <Param
            id="assignee"
            type="string"
            description="The assignees email address."
          />
          <Param
            id="created"
            type="timestamp"
            description="The time at which the assignment was created. In ISO-8601 format."
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(assignmentObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default TheAssignmentsObject
