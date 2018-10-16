import React from 'react'
import Spec from '../Spec'
import HideyBox from '../HideyBox'
import s from './Param.css'

const Type = ({ children }) => (
  children ?
  <span q="type">{children}</span> :
  null
)

const NestedParams = ({ children }) => {
  if (!children) { return null }
  return (
    <div q="nested">
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
  <span q="required">required</span> :
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
      <div q="root">
        <div q="meta">
          <span q="id">{id}</span>
          <Type>{type}</Type>
          <Required isRequired={isRequired} />
        </div>
        <div q="description">
          {description}
        </div>
      </div>
      <NestedParams>{nestedParams}</NestedParams>
    </>
  )
}

Param.Em = ({ children }) => (
  <em q="em">{children}</em>
)

export default Param
