import React, { useState } from 'react'
import Display from './Display'
import Hex from './Hex'
import Input from './Input'
import Toggle from './Toggle'

const Content = () => {

  const [color, set_color] = useState('');

  const [bg_color, set_bg_color] = useState('Empty Value');

  const [is_dark, set_is_dark] = useState(true);

  const [hex, set_hex] = useState('');

  return (
    <main>
      <Display 
        bg_color={bg_color}
        is_dark={is_dark}
      />
      <Hex 
        hex={hex}
      />
      <Input 
        color={color}
        set_color={set_color}
        set_bg_color={set_bg_color}
        set_hex={set_hex}
      />
      <Toggle 
        is_dark={is_dark}
        set_is_dark={set_is_dark}
      />
    </main>
  )}

export default Content