import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema, handleClickLogin } from '../../Components/validation'

import './Login.css'

export const Login = () => {

  return (

    <div className='container'>
      <div className='container-forms'>
        <h1>Entre em sua conta</h1>

        <div className='login-forms'>
          <Formik initialValues={{}} onSubmit={handleClickLogin}
            validationSchema={validationSchema}>
            <Form>
              <Field className='field' type='email' name='email'
                placeHolder='Email' />

              <ErrorMessage component='span' name='email' />

              <Field className='field' type='password' name='password'
                placeHolder='Senha' />
              <ErrorMessage component='span' name='password' />

              <button type='submit'>Entrar</button>
              <div className='user'>
                <span>Não possue uma conta?</span>
                <a href='/home'>Cadastre-se</a>
              
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login;