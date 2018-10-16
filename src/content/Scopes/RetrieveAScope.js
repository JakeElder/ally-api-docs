import React from 'react'
import Section from '../../components/Section'
import * as PrimaryContent from '../../components/PrimaryContent'
import * as SecondaryContent from '../../components/SecondaryContent'
import Code from '../../components/Code'
import CodeBlock from '../../components/CodeBlock'
import Spec from '../../components/Spec'
import Param from '../../components/Param'
import A from '../../components/A'
import scopeObject from '../../example-responses/scope-object.json'

const RetrieveAScope = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Retrieve a scope</PrimaryContent.Heading>
      <PrimaryContent.P>Retrieves the details of a scope.</PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="id"
            isRequired
            description="The id of the scope to be retrieved."
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="GET">
        scopes/&#123;id&#125;
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(scopeObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default RetrieveAScope
