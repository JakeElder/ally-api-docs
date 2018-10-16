import React from 'react'
import classnames from 'classnames'
import './Code.css'

const Code = ({ children, subtle }) => (
  <code q={classnames('root', { subtle })}>
    {children}
  </code>
)

Code.defaultProps = {
  subtle: false
}

export default Code
