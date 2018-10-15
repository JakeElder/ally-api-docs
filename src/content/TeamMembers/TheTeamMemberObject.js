import React from 'react'
import Section from '../../components/Section'
import * as PrimaryContent from '../../components/PrimaryContent'
import * as SecondaryContent from '../../components/SecondaryContent'
import Code from '../../components/Code'
import CodeBlock from '../../components/CodeBlock'
import Spec from '../../components/Spec'
import Param from '../../components/Param'
import A from '../../components/A'
import teamMemberObject from '../../example-responses/team-member-object.json'

const TheTeamMembersObject = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>The team members object</PrimaryContent.Heading>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Attributes</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="email"
            type="string"
            description="The team members email address."
          />
          <Param
            id="created"
            type="timestamp"
            description="The time at which the team member was created. In ISO-8601 format"
          />
          <Param
            id="rank"
            type="string"
            description={
              <>
                The rank of the team member. Either <Code subtle>admin</Code> or <Code subtle>moderator</Code>
              </>
            }
          />
          <Param
            id="assignments"
            type="list"
            description={
              <>
                Any <A href="#assignments">assignments</A> attached to this team member
              </>
            }
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(teamMemberObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default TheTeamMembersObject
