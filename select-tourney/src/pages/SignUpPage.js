
import {
    FormGroup,
    Label,
    Button,
  } from 'reactstrap';
  import {Formik, Field, Form, ErrorMessage} from 'formik';

  import { validateLoginForms } from '../utils/validateLoginForms';
  
  const Signup = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <div className="ts-form">
             <h1 className="mb-5">Sign Up</h1>
             <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email: '',
                    password:'',
                }}
                onSubmit={handleSubmit}
                validate={validateLoginForms}
            >
                <Form>
                    <FormGroup>
                        <Label htmlFor='firstName'>
                            First Name
                        </Label>
                        
                        <Field name="firstName" className='form-control bg-transparent text-white'/>
                        <ErrorMessage  name="firstName">
                            {(msg)=> <p className="text-danger">{msg}</p>}
                        </ErrorMessage>
                        
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor='lastName'>
                            Last Name
                        </Label>
                        
                        <Field name="lastName" className='form-control bg-transparent text-white'/>
                        <ErrorMessage  name="lastName">
                            {(msg)=> <p className="text-danger">{msg}</p>}
                        </ErrorMessage>
                        
                    </FormGroup>

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
                        <Field name="password" className='form-control bg-transparent text-white' type="password"/>
                        <ErrorMessage  name="password">
                            {(msg)=> <p className="text-danger">{msg}</p>}
                        </ErrorMessage>
                    </FormGroup>

                    <FormGroup className="mt-3 float-end" color="primary">
                        <Button type='submit' color='primary'>
                            Sign Up
                        </Button>
                        <div class="clearfix"></div>
                    </FormGroup>
                </Form>

            </Formik>
        
            <p className="mt-4">Have an account? <a href="/login">Log in here</a> </p>
        </div>
        
    )
}

export default Signup;