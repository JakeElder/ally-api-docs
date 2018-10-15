import React from 'react'
import s from './A.css'

const A = ({ children, ...rest }) => (
  <a {...rest} className={s.root}>{children}</a>
)

export default A
