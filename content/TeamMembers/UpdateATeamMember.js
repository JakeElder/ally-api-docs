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

const UpdateATeamMember = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Update a team member</PrimaryContent.Heading>
      <PrimaryContent.P>Updates the specified team member. Currently only the <Code>role</Code> can be set using this API. The <A href="#assignments">assignments API</A> should be used to update assignments</PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="role"
            type="string"
            description={
              <>
                The role the user should be assigned. Either <Code subtle>admin</Code> or <Code subtle>moderator</Code>
              </>
            }
          />
        </Spec>
      </PrimaryContent.Spec>
      <PrimaryContent.Heading>Returns</PrimaryContent.Heading>
      <PrimaryContent.P>
        Returns the updated team member object if the update succeeded.
      </PrimaryContent.P>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="POST">
        /team-members/&#123;email&#125;
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(teamMemberObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default UpdateATeamMember

