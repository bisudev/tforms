import React from 'react'
import cn from 'classnames'

const Row = ({ children, className, ...props }) => {
  const cl = cn('tforms--row', className)

  return (
    <div className={cl} {...props}>
      {children}
    </div>
  )
}

export default Row
