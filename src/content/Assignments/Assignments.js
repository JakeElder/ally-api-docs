import React from 'react'
import Section from '../../components/Section'
import * as PrimaryContent from '../../components/PrimaryContent'
import * as SecondaryContent from '../../components/SecondaryContent'
import Code from '../../components/Code'

const Assignments = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Assignments</PrimaryContent.Heading>
      <PrimaryContent.P>
        <Code>Assignment</Code> objects represent an ongoing task or division of work that can be assigned to a team member.
      </PrimaryContent.P>
    </PrimaryContent.Root>
  </Section>
)

export default Assignments
