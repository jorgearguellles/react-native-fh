import { useForm } from '../hooks/useForm';

export const Forms = () => {

  const { form, email, password, onChange } = useForm({
    email: 'test@test.com',
    password: '12345',
  });

  return (
    <>
      <h3>Form</h3>
      <input 
        type='text'
        className='form-control'
        placeholder={ email }
        onChange={ ( event )=>onChange( event.target.value , 'email') }
      />
      <input 
        type='text'
        className='form-control mt-2 mb-2'
        placeholder={ password }
        onChange={ ( event )=>onChange( event.target.value , 'password') }
      />

      <code>
        <pre>
          {
            JSON.stringify( form, null, 2)
          }
        </pre>
      </code>
    </>
  )
}
