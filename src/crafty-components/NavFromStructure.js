import React from 'react'
import { paramCase } from 'change-case'
import { Group, Section } from '../Structure'
import * as Nav from '../components/Nav'

function structureToNav(structure, activeSection) {
  return (
    <Nav.Root>
      {mapGroups(structure.props.children, activeSection)}
    </Nav.Root>
  )
}

function mapGroups(groups, activeSection) {
  return React.Children.map(groups, c => {
    return (
      <Nav.Section heading={c.props.id}>
        {mapSections(c.props.children, activeSection)}
      </Nav.Section>
    )
  })
}

function mapSections(sections, activeSection) {
  return React.Children.map(sections, c => {
    return (
      <Nav.Entry
        id={paramCase(c.props.id)}
        label={c.props.id}
        isActive={c.props.id === activeSection}
      >
        {mapSections(c.props.children, activeSection)}
      </Nav.Entry>
    )
  })
}

const NavFromStructure = ({ structure, activeSection }) => 
  structureToNav(structure, activeSection)

export default NavFromStructure
