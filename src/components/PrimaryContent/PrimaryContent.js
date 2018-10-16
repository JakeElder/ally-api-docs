import React from 'react'
import './PrimaryContent.css'

export const Root = ({ children }) => (
  <div q="root">
    {children}
  </div>
)

export const Heading = ({ children }) => (
  <h1 q="heading">{children}</h1>
)

export const SubHeading = ({ children }) => (
  <h1 q="sub-heading">{children}</h1>
)

export const P = ({ children }) => (
  <p q="p">{children}</p>
)

export const Spec = ({ children }) => (
  <div q="spec">{children}</div>
)
