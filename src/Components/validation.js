import *as yup from 'yup'


export const handleClickLogin = (values) => {
    const options = {
        method: 'POST',
        body: new URLSearchParams({ email: values.email, password: values.password }),
      };
  
      fetch('http://localhost:3005/login', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

export const validationSchema = yup.object().shape({
    email: yup.string().email('Não é um email').required('Email Obrigatório'),
    password: yup.string().min(8).required('Senha Obrigatória')
})

