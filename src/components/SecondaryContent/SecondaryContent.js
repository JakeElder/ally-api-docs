import React from 'react'
import s from './SecondaryContent.css'

export const Root = ({ children }) => (
  <div className={s.root}>
    {children}
  </div>
)

export const Heading = ({ children }) => (
  <h3 className={s.heading}>{children}</h3>
)

export const P = ({ children }) => (
  <p className={s.p}>{children}</p>
)

export const Request = ({ type, children }) => (
  <h3 className={s.request}>
    <span className={s.requestType}>{type}</span>
    {' '}
    <span className={s.requestUrl}>{children}</span>
  </h3>
)
