import React from 'react'
import s from './Pre.css'

const Pre = ({ children, fontSize }) => (
  <pre
    className={s.root}
    style={{ fontSize: fontSize && fontSize }}
  >
    {children}
  </pre>
)

export default Pre
