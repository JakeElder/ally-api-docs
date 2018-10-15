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
      <PrimaryContent.Heading>Retrieve a team member</PrimaryContent.Heading>
      <PrimaryContent.P>Retrieves the details of a team member.</PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="email"
            isRequired
            description="The email address of the team member to be retrieved"
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="GET">
        /team-members/&#123;email&#125;
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(teamMemberObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default TheTeamMembersObject
