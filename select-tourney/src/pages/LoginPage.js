
import {
    FormGroup,
    Label,
    Button,
  } from 'reactstrap';
  import {Formik, Field, Form, ErrorMessage} from 'formik';

  import { validateLoginForms } from '../utils/validateLoginForms';
  
  const Login = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <div className="ts-form">
            <h1 className="mb-5">Log In</h1>
            <Formik
                initialValues={{
                    email: '',
                    password:''
                }}
                onSubmit={handleSubmit}
                validate={validateLoginForms}
            >
                <Form>
                    <FormGroup>
                        <Label htmlFor='email'>
                            Email
                        </Label>
                        
                        <Field name="email" className='form-control bg-transparent text-white'/>
                        <ErrorMessage  name="email">
                            {(msg)=> <p className="text-danger">{msg}</p>}
                        </ErrorMessage>
                        
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='password'>
                            Password
                        </Label>
                        
                        <Field name="password" className='form-control bg-transparent text-white'/>
                        <ErrorMessage  name="password">
                            {(msg)=> <p className="text-danger">{msg}</p>}
                        </ErrorMessage>
                        
                    </FormGroup>

                    <FormGroup className="mt-3 float-end" color="primary">
                        <Button type='submit' color='primary'>
                            Log In
                        </Button>
                        <div class="clearfix"></div>
                    </FormGroup>
                    <p className="mt-4">Don't have an account? <a href="/sign-up">Sign up here</a> </p>

                </Form>
                
            </Formik>
   
        </div>
        
    )
}

export default Login;