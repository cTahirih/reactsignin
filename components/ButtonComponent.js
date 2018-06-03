import React from 'react'

const Button = (props)  => {
  return (
    <button onClick={props.changeName}>Cambiar de nombre</button>
  )
}

export default Button;