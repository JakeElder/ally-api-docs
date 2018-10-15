import React from 'react'
import A from '../A'
import s from './HideyBox.css'

const Content = ({ show, children }) => {
  if (!show) { return null }
  return (
    <div className={s.content}>
      {children}
    </div>
  )
}

class HideyBox extends React.Component {
  constructor() {
    super()
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = { isOpen: false }
  }

  toggleVisibility() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { children, label } = this.props
    const { isOpen } = this.state

    return (
      <div className={s.root}>
        <div
          className={s.label}
          onClick={this.toggleVisibility}
        >
          <A>{label(isOpen)}</A>
        </div>
        <Content show={isOpen}>{children}</Content>
      </div>
    )
  }
}

export default HideyBox
