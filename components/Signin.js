import React from 'react';

export default class SignIn extends React.Component {
  emailRef = React.createRef()
  passRef = React.createRef()

  user = {}

  asignUser = (props) => {
    const emailValue = this.emailRef.current.value
    const passValue = this.passRef.current.value
    this.user = {
      email: emailValue,
      password: passValue
    }

    props.setNameAndPassword(this.user)
  }
  render() {
    return (
      <div>
        <span>Correo Electrónico</span>
        <input type = "email" ref={this.emailRef}/>
        <br></br>
        <span>Contraseña</span>
        <input type = "password" ref={this.passRef}/>
        <br></br>
        <button onClick={() => {this.asignUser(this.props)}}>Cambiar nombre</button>
      </div>
    )
  }
}

