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

const ListAllScopes = () => (
  <Section>
    <PrimaryContent.Root>
      <PrimaryContent.Heading>List scopes</PrimaryContent.Heading>
      <PrimaryContent.P>Returns a list of scopes. Accepts the following arguments, In addition to the <A href="#pagination">pagination attributes</A></PrimaryContent.P>
      <PrimaryContent.Spec>
        <PrimaryContent.SubHeading>Arguments</PrimaryContent.SubHeading>
        <Spec>
          <Param
            id="resource"
            type="string"
            description={
              <>
                Filters the resulting list to include only scopes for this resource type. One of <Code subtle>actors</Code>, <Code subtle>stories</Code>, <Code subtle>messages</Code>.
              </>
            }
          />
        </Spec>
      </PrimaryContent.Spec>
    </PrimaryContent.Root>
    <SecondaryContent.Root>
      <SecondaryContent.Request type="GET">
        /scopes
      </SecondaryContent.Request>
      <SecondaryContent.Heading>Example Response</SecondaryContent.Heading>
      <CodeBlock>
        {
          JSON.stringify({
            data: [
              { ...scopeObject },
              {
                ...scopeObject,
                id: 'active-groomers',
                label: 'Active groomers',
                criteria: {
                  open_grooming_story_involvement_where_sender_min: 1
                }
              }
            ],
            pagination: {}
          }, null, 2)
        }
      </CodeBlock>
    </SecondaryContent.Root>
  </Section>
)

export default ListAllScopes


