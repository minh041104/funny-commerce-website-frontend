'use server'
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import {z} from 'zod'

const SignUpFormSchema = z.object({
  name: z
  .string()
  .min(2, { message: 'Name must be at least 2 characters long.' })
  .trim(),

  password: z
  .string()
  .min(8, { message: 'Be at least 8 characters long' })
  .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
  .regex(/[0-9]/, { message: 'Contain at least one number.' })
  .trim(),
})

const signUp = async (state, formData) => {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password')
  })
  if (!validatedFields.success) {
    console.log('You failed!')
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
  console.log('Success!')
  return validatedFields;
}
export default signUp