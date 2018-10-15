import React from 'react'
import classnames from 'classnames'
import s from './Nav.css'

export const Root = ({ children }) => (
  <div className={s.root}>
    {children}
  </div>
)

export const Section = ({ heading, children }) => (
  <div className={s.section}>
    <h3 className={s.sectionHeading}>{heading}</h3>
    <ul className={s.links}>
      {children}
    </ul>
  </div>
)

export const SubSection = ({ children }) => (
  children ?
  <ul className={s.subSection}>{children}</ul> :
  null
)

export const Entry = ({ id, label, isActive, children }) => (
  <li className={classnames(s.entry, { [s.active]: isActive })}>
    <a href={`#${id}`} className={`${s.link}`}>{label}</a>
    <SubSection>{children}</SubSection>
  </li>
)
