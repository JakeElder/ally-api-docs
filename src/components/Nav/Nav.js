import React from 'react'
import classnames from 'classnames'
import './Nav.css'

export const Root = ({ children }) => (
  <div q="root">
    {children}
  </div>
)

export const Section = ({ heading, children }) => (
  <div q="section">
    <h3 q="section-heading">{heading}</h3>
    <ul q="links">
      {children}
    </ul>
  </div>
)

export const SubSection = ({ children }) => (
  children ?
  <ul q="sub-section">{children}</ul> :
  null
)

export const Entry = ({ id, label, isActive, children }) => (
  <li q={classnames('entry', { 'is-active': isActive })}>
    <a href={`#${id}`} q="link">{label}</a>
    <SubSection>{children}</SubSection>
  </li>
)
