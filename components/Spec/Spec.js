import React from 'react'
import classnames from 'classnames'
import s from './Spec.css'

const Spec = ({ children, id, isNested }) => (
  <ul className={classnames(s.root, { [s.isNested]: isNested })}>
    {React.Children.map(children, e => (
      <li
        key={`${id}:${e.props.id}`}
        className={s.entry}
      >
        {e}
      </li>
    ))}
  </ul>
)

export default Spec
