'use server'
import {console} from "next/dist/compiled/@edge-runtime/primitives";
import {z} from 'zod'
import axios from "axios";

const SignUpFormSchema = z.object({
  name: z
  .string()
  .trim(),

  password: z
  .string()
  .trim(),

})
const logIn = async (state, formData) => {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    password: formData.get('password'),
  })
  // if (!validatedFields.success) {
  //   console.log('You failed!')
  //   return {
  //     fieldErrors: validatedFields.error.flatten().fieldErrors,
  //     formErrors: validatedFields.error.flatten().formErrors
  //   }
  // }
  console.log(validatedFields.data)
  // axios({
  //   url: 'http://localhost:5000/register',
  //   method: 'post',
  //   data: {
  //     name: name,
  //     password: password
  //   }
  // }).then(() => {
  //   console.log('Request sent!')
  // }, () => {
  //   console.log('FAILURE!')
  // })
  console.log('Success!')
  return validatedFields;
}
export default logIn;