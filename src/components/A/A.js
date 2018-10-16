import React from 'react'
import './A.css'

const A = ({ children, ...rest }) => (
  <a {...rest} q="root">{children}</a>
)

export default A
