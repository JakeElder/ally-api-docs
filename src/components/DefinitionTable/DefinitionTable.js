import React from 'react'
import s from './DefinitionTable.css'

export const Root = ({ children }) => (
  <ul className={s.root}>
    {children}
  </ul>
)

export const Entry = ({ term, description }) => (
  <li className={s.entry}>
    <span className={s.term}>{term}</span>
    <span className={s.description}>{description}</span>
  </li>
)
