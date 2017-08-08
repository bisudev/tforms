import React from 'react'

const Fieldset = ({ children, legend, ...props }) =>
  <fieldset {...props}>
    {legend &&
      <legend>
        {legend}
      </legend>}
    {children}
  </fieldset>

export default Fieldset
