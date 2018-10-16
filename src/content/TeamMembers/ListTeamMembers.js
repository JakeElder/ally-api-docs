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

const ListTeamMembers = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>List team members</PrimaryContent.Heading>
      <PrimaryContent.P>Returns a list of team members. Accepts the following arguments, In addition to the <A href="#pagination">pagination attributes</A></PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="rank"
            type="string"
            description={
              <>
                Filters the results to include only actors of this rank. Either <Code subtle>admin</Code> or <Code subtle>moderator</Code>.
              </>
            }
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="GET">
        /team-members
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>
        {
          JSON.stringify({
            data: [
              { ...teamMemberObject },
              {
                ...teamMemberObject,
                email: "tom@spiritai.com",
                created: "2018-11-19T07:31:27.046Z"
              }
            ],
            pagination: {}
          }, null, 2)
        }
      </CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default ListTeamMembers


