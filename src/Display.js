import React from 'react'

const Display = ({bg_color, is_dark}) => {

  let style = {
    backgroundColor: `${bg_color}`,
    color: `${is_dark ? 'black' : 'white'}`
  };

  return (
    <div className='display'>
      <input 
        style={style}
        className='display_input'
        placeholder='Empty Value'
        value={bg_color}
      />
    </div>
  )

}

export default Display