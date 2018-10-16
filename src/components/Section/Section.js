import React from 'react'
import classnames from 'classnames'
import './Section.css'

const Section = ({ id, children, score }) => {
  const [primary, secondary] = React.Children.toArray(children)
  return (
    <div
      id={id}
      q={classnames('root', { 'scored': score })}
    >
      <div q="primary">{primary}</div>
      <div q="secondary">{secondary}</div>
    </div>
  )
}

Section.defaultProps = {
  score: true
}

export default Section
