import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import * as themesObject from 'react-syntax-highlighter/styles/hljs'
import Pre from '../Pre'

const themeNames = Object.keys(themesObject)
const themes = Object.values(themesObject)

const Debug = ({ show, state, prev, next }) => (show &&
  <>
      {state.themeIdx}/{themes.length} - {themeNames[state.themeIdx]}
      <br />
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
  </>
)

const Wrapper = ({ children }) =>
  <div style={{ color: '#bfd7e6' }}>
    <Pre>{children}</Pre>
  </div>

themes[75] = {
  ...themes[75],
  'hljs-attr': { color: '#eee' },
  // 'hljs-attr': { color: '#c8ffec' },
  // 'hljs-attr': { color: '#a9e299' },
  'hljs-string': { color: '#e4ddb7' },
  'hljs-number': { color: '#d8b2d6' },
}

class CodeBlock extends React.Component {
  constructor() {
    super()
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
    // 3, 44, 54, 55, 75
    this.state = { themeIdx: 75 }
  }

  prev() {
    this.setState({ themeIdx: this.state.themeIdx - 1 })
  }

  next() {
    this.setState({ themeIdx: this.state.themeIdx + 1 })
  }

  render() {
    const { children: code } = this.props

    return (
      <>
        <SyntaxHighlighter
          language="json"
          style={themes[this.state.themeIdx]}
          PreTag={Wrapper}
        >
          {code}
        </SyntaxHighlighter>
        <Debug {...this} show={false} />
      </>
    )
  }
}

export default CodeBlock
