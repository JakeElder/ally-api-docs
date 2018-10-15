import React, { Children } from 'react'
import { paramCase } from 'change-case'
import Layout from './components/Layout'
import NavFromStructure from './crafty-components/NavFromStructure'
import ContentFromStructure from './crafty-components/ContentFromStructure'
import structure from './Structure'

function structureToSections(structure) {
  const groups = Children.toArray(structure.props.children)
  return groups.reduce((sections, group) => [
    ...sections,
    ...mapSections(Children.toArray(group.props.children))
  ], [])
}

function mapSections(sections = []) {
  return sections.reduce((mapped, section) => {
    const { id } = section.props
    const fragment = paramCase(id)
    return [
      ...mapped,
      { id, fragment },
      ...mapSections(Children.toArray(section.props.children))
    ]
  }, [])
}

export default class extends React.Component {
  constructor() {
    super()
    this.state = { activeSection: null }
    this.sections = structureToSections(structure)
    this.contentRef = React.createRef()
    this.createSectionRef = this.createSectionRef.bind(this)
    this.handleContentScroll = this.handleContentScroll.bind(this)
  }

  componentDidMount() {
    this.updateSectionOffsets()
    this.updateActiveSection()
  }

  updateSectionOffsets() {
    this.sections = this.sections.map(s => (
      s.ref ?  { ...s, offset: s.ref.current.offsetTop } : s
    )).sort((a, b) => (a.offset > b.offset))
  }

  createSectionRef(id) {
    const ref = React.createRef()
    const section = this.sections.find(s => s.id === id)
    section.ref = ref
    return ref
  }

  handleContentScroll() {
    this.updateActiveSection()
  }

  getActiveSection() {
    const sections = this.sections.filter(s => s.ref)
    const contentEl = this.contentRef.current
    const { scrollTop, scrollHeight, offsetHeight } = contentEl
    if (scrollHeight - offsetHeight === scrollTop) {
      return sections[sections.length - 1].id
    }
    const idx = sections.findIndex(s => scrollTop < s.offset)
    return sections[(idx > -1 ? idx : sections.length) - 1].id
  }

  updateActiveSection() {
    const activeSection = this.getActiveSection()
    if (activeSection !== this.state.activeSection) {
      this.setState({ activeSection: this.getActiveSection() })
    }
  }

  render() {
    return (
      <Layout
        contentRef={this.contentRef}
        onContentScroll={this.handleContentScroll}
      >
        <NavFromStructure
          structure={structure}
          activeSection={this.state.activeSection}
        />
        <ContentFromStructure
          structure={structure}
          createSectionRef={this.createSectionRef}
        />
      </Layout>
    )
  }
}
