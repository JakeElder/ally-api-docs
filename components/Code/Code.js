import React from 'react'
import classnames from 'classnames'
import s from './Code.css'

const Code = ({ children, subtle }) => (
  <code className={classnames(s.root, { [s.subtle]: subtle })}>
    {children}
  </code>
)

Code.defaultProps = {
  subtle: false
}

export default Code
