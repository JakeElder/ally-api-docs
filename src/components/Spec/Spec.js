import React from 'react'
import classnames from 'classnames'
import './Spec.css'

const Spec = ({ children, id, isNested }) => (
  <ul q={classnames('root', { 'is-nested': isNested })}>
    {React.Children.map(children, e => (
      <li q="entry" key={`${id}:${e.props.id}`}>{e}</li>
    ))}
  </ul>
)

export default Spec
