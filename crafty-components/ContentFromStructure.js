import React, { Children } from 'react'
import { paramCase, pascalCase } from 'change-case'
import objectPath from 'object-path'
import * as content from '../content'

const CreateRef = React.createContext()

function structureToContent(structure) {
  const groups = Children.toArray(structure.props.children)
  return groups.reduce((sections, group) => [
    ...sections,
    ...mapSections(Children.toArray(group.props.children))
  ], [])
}

function mapSections(sections = []) {
  return sections.reduce((mapped, section) => {
    const { id } = section.props
    const C = content[pascalCase(id)]
    if (!content[pascalCase(id)]) {
      console.warn(`"${pascalCase(id)}" content not found.`)
      return [
        mapped,
        ...mapSections(Children.toArray(section.props.children))
      ]
    }
    return [
      ...mapped,
      (
        <Section key={id} id={id}>
          <C />
        </Section>
      ),
      ...mapSections(Children.toArray(section.props.children))
    ]
  }, [])
}

const Section = ({ id, children }) => (
  <CreateRef.Consumer>
    {createRef => (
      <div id={paramCase(id)} ref={createRef(id)}>
        {children}
      </div>
    )}
  </CreateRef.Consumer>
)

class ContentFromStructure extends React.Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const { structure, createSectionRef } = this.props
    return (
      <CreateRef.Provider value={createSectionRef}> 
        {structureToContent(structure)}
      </CreateRef.Provider>
    )
  }
}
export default ContentFromStructure
