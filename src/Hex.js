import React from 'react'
import colorNames from 'colornames'

const Hex = ({ hex }) => {
  return (
    <div className='hex_display'>
      <p>
        {colorNames(hex)}
      </p>
    </div>
  )
}

export default Hex