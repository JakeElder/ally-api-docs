import React from 'react'

export const Group = ({ children }) => children
export const Section = ({ children }) => children

export default (
  <>
    <Group id="Resources">
      <Section id="Team Members">
        <Section id="The team member object" />
        <Section id="Retrieve a team member" />
        <Section id="Update a team member" />
        <Section id="List all team members" />
      </Section>
    </Group>
    <Group id="Topics">
      <Section id="Introduction" />
      <Section id="Errors" />
      <Section id="Pagination" />
    </Group>
  </>
)
/*
      <Section id="Scopes">
        <Section id="The scope object" />
        <Section id="Retrieve a scope" />
        <Section id="Update a scope" />
        <Section id="List all scopes" />
      </Section>
      */
