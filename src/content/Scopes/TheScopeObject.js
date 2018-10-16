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

const TheScopeObject = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>The scope object</PrimaryContent.Heading>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Attributes</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="id"
            type="string"
            description="A unique identifier."
          />
          <Param
            id="label"
            type="string"
            description="A user defined label."
          />
          <Param
            id="resource"
            type="string"
            description={
              <>
                The resource to which the scope can be applied. One of <Code subtle>actors</Code>, <Code subtle>stories</Code>, <Code subtle>messages</Code>.
              </>
            }
          />
          <Param
            id="criteria"
            type="hash"
            description={
              <>
                The set of criteria that resources under this scope should meet.
              </>
            }
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(scopeObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default TheScopeObject
