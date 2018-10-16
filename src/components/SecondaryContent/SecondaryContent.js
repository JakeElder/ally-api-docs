import React from 'react'
import './SecondaryContent.css'

export const Root = ({ children }) => (
  <div q="root">
    {children}
  </div>
)

export const Heading = ({ children }) => (
  <h3 q="heading">{children}</h3>
)

export const P = ({ children }) => (
  <p q="p">{children}</p>
)

export const Request = ({ type, children }) => (
  <h3 q="request">
    <span q="request-type">{type}</span>
    {' '}
    <span q="request-url">{children}</span>
  </h3>
)
