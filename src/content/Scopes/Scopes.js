import React from 'react'
import Section from '../../components/Section'
import * as PrimaryContent from '../../components/PrimaryContent'
import * as SecondaryContent from '../../components/SecondaryContent'
import Code from '../../components/Code'

const Scopes = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Scopes</PrimaryContent.Heading>
      <PrimaryContent.P>
        <Code>Scope</Code> objects represent a set of filtering criteria for a listable resource. Creating and managing sensible scopes will make it easier to manage team member work loads and generate reports.
      </PrimaryContent.P>
    </PrimaryContent.Root>
  </Section>
)

export default Scopes
