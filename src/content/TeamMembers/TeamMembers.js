import React from 'react'
import Section from '../../components/Section'
import * as PrimaryContent from '../../components/PrimaryContent'
import * as SecondaryContent from '../../components/SecondaryContent'
import Code from '../../components/Code'

const TeamMembers = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Team Members</PrimaryContent.Heading>
      <PrimaryContent.P>
        <Code>TeamMember</Code> objects represent Ally users in your organisation. The API allows you to retrieve and update team members.
      </PrimaryContent.P>
    </PrimaryContent.Root>
  </Section>
)

export default TeamMembers
