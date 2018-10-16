import React from 'react'
import './Pre.css'

const Pre = ({ children, fontSize }) => (
  <pre
    q="root"
    style={{ fontSize: fontSize && fontSize }}
  >
    {children}
  </pre>
)

export default Pre
