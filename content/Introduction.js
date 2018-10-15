import React from 'react'
import * as PrimaryContent from '../components/PrimaryContent'
import * as SecondaryContent from '../components/SecondaryContent'
import Pre from '../components/Pre'
import A from '../components/A'
import Section from '../components/Section'

export default () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>API Reference</PrimaryContent.Heading>
      <PrimaryContent.P>
        The Ally API is organized around <A href="http://en.wikipedia.org/wiki/Representational_State_Transfer" target="_blank">REST</A>. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors.
      </PrimaryContent.P>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Heading>Base URL</SecondaryContent.Heading>
      <Pre fontSize={13}>https://ally.spiritai.com/api/v1</Pre>
    </SecondaryContent.Root>
  </Section>
)
