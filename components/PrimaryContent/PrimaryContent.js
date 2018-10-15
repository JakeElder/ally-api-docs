import React from 'react'
import s from './PrimaryContent.css'

export const Root = ({ children }) => (
  <div className={s.root}>
    {children}
  </div>
)

export const Heading = ({ children }) => (
  <h1 className={s.heading}>{children}</h1>
)

export const SubHeading = ({ children }) => (
  <h1 className={s.subHeading}>{children}</h1>
)

export const P = ({ children }) => (
  <p className={s.p}>{children}</p>
)

export const Spec = ({ children }) => (
  <div className={s.spec}>{children}</div>
)
