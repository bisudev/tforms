import React, { Component } from 'react'
import cn from 'classnames'

class Field extends Component {
  _ref = null

  // focus the input inside if this section is clicked
  _onClick = () => {
    // get the input
    const input = this._ref.querySelector('.form-control')
    if (!input) {
      return
    }

    // get the fieldset
    const fieldset = this._ref.closest('fieldset')
    if (!fieldset) {
      return
    }

    // check if the input or fieldset is disabled
    if (input.hasAttribute('disabled') || fieldset.hasAttribute('disabled')) {
      return
    }

    // focus the input
    input.focus()
  }

  render() {
    const { children, className, span, ...props } = this.props
    const cl = cn('tforms--field', className)
    return (
      <div
        ref={c => (this._ref = c)}
        className={cl}
        onClick={this._onClick}
        style={{ flexGrow: Number(span), flexBasis: Number(span) }}
        {...props}
      >
        {children}
      </div>
    )
  }
}

Field.defaultProps = {
  span: '1',
}

export default Field
