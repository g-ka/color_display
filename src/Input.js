import React from 'react'

const Input = ({ color, set_color, set_bg_color, set_hex}) => {

  return (
    <div className='input'>
      <input
        autoFocus
        className='input_input'
        type='text'
        placeholder='Enter color name'
        required
        value={color}
        onChange={e => {
          set_color(e.target.value); 
          set_bg_color(e.target.value);
          set_hex(e.target.value);
        }}
      />
    </div>
  )
}

export default Input