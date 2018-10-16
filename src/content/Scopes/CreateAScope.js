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

const CreateAScope = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>Create a scope</PrimaryContent.Heading>
      <PrimaryContent.P>Creates a scope with the supplied arguments.</PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="resource"
            type="string"
            description={
              <>
                The resource to which the scope is to be applied to. One of <Code subtle>actors</Code>, <Code subtle>stories</Code>, <Code subtle>messages</Code>.
              </>
            }
          />
          <Param
            id="criteria"
            type="hash"
            description={
              <>
                The criteria under which objects of the type set as <Code subtle>resource</Code> should meet in order to fall within this scope. This hash can contain any arguments marked with the scope icon in the relavant resource list documentation (<A href="#list-actors">actors</A>, <A href="#list-stories">stories</A>, <A href="#list-messages">messages</A>).
              </>
            }
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="POST">
        /scopes
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>{JSON.stringify(scopeObject, null, 2)}</CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default CreateAScope
