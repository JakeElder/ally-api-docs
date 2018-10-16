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

const ListAssignments = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>List assignments</PrimaryContent.Heading>
      <PrimaryContent.P>Returns a list of assignments. Accepts the following arguments, In addition to the <A href="#pagination">pagination attributes</A></PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="assignee"
            type="string"
            description="Filters the results to assignments that are assigned to the team member specified."
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="GET">
        /assignments
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>
        {
          JSON.stringify({
            data: [
              { ...assignmentObject },
              {
                ...assignmentObject,
                id: "manage-groomers",
                description: "Manage groomers"
              }
            ],
            pagination: {}
          }, null, 2)
        }
      </CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default ListAssignments


