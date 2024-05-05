'use client'

import {useFormState} from 'react-dom'
import signUp from "@/apis/signUp";

const SignUpForm = () => {
  const [state, action] = useFormState(signUp, undefined)

  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password"/>
      </div>
      <button type="submit">Sign Up</button>
      {state && state.errors.password && (
        <div>
          {state.errors.password.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </div>
      )}
    </form>
  )
}

export default SignUpForm;