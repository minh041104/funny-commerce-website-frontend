'use client'

import {useFormState} from 'react-dom'

import LoginInput from "@/components/LoginInput";
import signUp from "@/apis/signUp";

const SignUpForm = () => {
  const [state, action] = useFormState(signUp, undefined)

  return (
    <form style={FormStyle} action={action}>
      <LoginInput name={"name"} placeholder={"USERNAME"}>
      </LoginInput>
      <LoginInput name={"password"} placeholder={"PASSWORD"} type={"password"}>
      </LoginInput>
      <LoginInput name={"confirmPassword"} placeholder={"CONFIRM PASSWORD"} type={"password"}>
      </LoginInput>
      <button style={ButtonStyle} type="submit">Sign Up</button>
      {state && state.fieldErrors && state.fieldErrors.name && (
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
            {state.fieldErrors.name.map((error) => (
              <li style={{
                padding: 0,
                margin: 0,
              }} key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      {state && state.fieldErrors && state.fieldErrors.password && (
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
            {state.fieldErrors.password.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      {state && state.formErrors && (
        <div style={{
          padding: 0,
          margin: 0,
        }}>
          <p style={{
            padding: 0,
            margin: 0,
          }}>
            {state.formErrors}
          </p>
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