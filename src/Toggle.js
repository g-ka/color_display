import React from 'react'

const Toggle = ({ is_dark, set_is_dark }) => {
  return (
    <button 
      className='toggle'
      onClick={() => set_is_dark(!is_dark)}
    >
      Toggle Text Color
    </button>
  )
}

export default Toggle