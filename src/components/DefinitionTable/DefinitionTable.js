import React from 'react'
import s from './DefinitionTable.css'

export const Root = ({ children }) => (
  <ul q="root">
    {children}
  </ul>
)

export const Entry = ({ term, description }) => (
  <li q="entry">
    <span q="term">{term}</span>
    <span q="description">{description}</span>
  </li>
)
