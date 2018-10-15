import React from 'react'
import Spec from '../Spec'
import HideyBox from '../HideyBox'
import s from './Param.css'

const Type = ({ children }) => (
  children ?
  <span className={s.type}>{children}</span> :
  null
)

const NestedParams = ({ children }) => {
  if (!children) { return null }
  return (
    <div className={s.nested}>
      <HideyBox
        label={isOpen => `${isOpen ? 'Hide' : 'Show'} child attributes`}
      >
        <Spec isNested>{children}</Spec>
      </HideyBox>
    </div>
  )
}

const Required = ({ isRequired }) => (
  isRequired ?
  <span className={s.required}>required</span> :
  null
)

const Param = ({
  id,
  type,
  description,
  children: nestedParams,
  isRequired
}) => {
  return (
    <>
      <div className={s.root}>
        <div className={s.meta}>
          <span className={s.id}>{id}</span>
          <Type>{type}</Type>
          <Required isRequired={isRequired} />
        </div>
        <div className={s.description}>
          {description}
        </div>
      </div>
      <NestedParams>{nestedParams}</NestedParams>
    </>
  )
}

Param.Em = ({ children }) => (
  <em className={s.em}>{children}</em>
)

export default Param
