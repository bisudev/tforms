import React, { Component } from 'react'

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
    const { children, span, ...props } = this.props
    return (
      <div
        ref={c => (this._ref = c)}
        className="tforms--field"
        onClick={this._onClick}
        style={{ flexGrow: Number(span), flexBasis: Number(span) }}
        {...props}
      >
        <div>
          {children}
        </div>
      </div>
    )
  }
}

Field.defaultProps = {
  span: '1',
}

export default Field
