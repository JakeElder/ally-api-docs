import React from 'react'
import classnames from 'classnames'
import s from './Section.css'

const Section = ({ id, children, score }) => {
  const [primary, secondary] = React.Children.toArray(children)
  return (
    <div
      id={id}
      className={classnames(s.root, { [s.scored]: score })}
    >
      <div className={s.primary}>
        {primary}
      </div>
      <div className={s.secondary}>
        {secondary}
      </div>
    </div>
  )
}

Section.defaultProps = {
  score: true
}

export default Section
