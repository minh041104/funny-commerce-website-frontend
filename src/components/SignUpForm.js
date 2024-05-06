'use client'

import {useFormState} from 'react-dom'
import signUp from "@/apis/signUp";

const SignUpForm = () => {
  const [state, action] = useFormState(signUp, undefined)

  return (
    <form style={FormStyle} action={action}>
      <div style={PlaceHolderStyle}>
        <input style={InputStyle} id="name" name="name" placeholder="USERNAME"/>
      </div>
      <div style={PlaceHolderStyle}>
        <input style={InputStyle} id="password" name="password" type="password" placeholder="PASSWORD"/>
      </div>
      <button style={ButtonStyle} type="submit">Sign Up</button>
      {state && state.errors && state.errors.name && (
        <div style={{
          padding: 0,
          margin: 0,
        }}>
          <p style={{
            padding: 0,
            margin: 0,
          }}>Username must:</p>
          <ul style={{
            margin: 0,
          }}>
            {state.errors.name.map((error) => (
              <li style={{
                padding: 0,
                margin: 0,
              }} key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      {state && state.errors && state.errors.password && (
        <div style={{
          padding: 0,
          margin: 0,
        }}>
          <p style={{
            padding: 0,
            margin: 0,
          }}>Password must:</p>
          <ul style={{
            margin: 0,
          }}>
            {state.errors.password.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  )
}

const FormStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
}
const PlaceHolderStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '18.75rem',
  height: '2.8125rem',
  borderWidth: '1px',
  borderRadius: '0.25rem',
  borderStyle: 'solid',

}
const InputStyle = {
  fontSize: '1rem',
  fontFamily: 'Montserrat',
  background: 'transparent',
  border: 'none',
  outline: 'none'
}
const ButtonStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '18.75rem',
  height: '2.8125rem',
  borderRadius: '0.25rem',
}

export default SignUpForm;