import React from 'react'

const Row = ({ children, ...props }) =>
  <div className="tforms--row" {...props}>
    {children}
  </div>

export default Row
