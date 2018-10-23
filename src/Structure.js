import React from 'react'

export const Group = ({ children }) => children
export const Section = ({ children }) => children

export default (
  <>
    <Group id="Topics">
      <Section id="Introduction" />
      <Section id="Errors" />
      <Section id="Pagination" />
    </Group>
    <Group id="Resources">
      <Section id="Assignments">
        <Section id="The assignment object" />
        <Section id="Create an assignment" />
        <Section id="Retrieve an assignment" />
        <Section id="Update an assignment" />
        <Section id="List assignments" />
      </Section>
      <Section id="Scopes">
        <Section id="The scope object" />
        <Section id="Create a scope" />
        <Section id="Retrieve a scope" />
        <Section id="Update a scope" />
        <Section id="List scopes" />
      </Section>
      <Section id="Team Members">
        <Section id="The team member object" />
        <Section id="Retrieve a team member" />
        <Section id="Update a team member" />
        <Section id="List team members" />
      </Section>
    </Group>
  </>
)
