import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { createEmptyLogin, Login } from './login.vm';
import { Formik, Form } from 'formik';
import {TextFieldComponent} from 'common/form';
import { formValidation } from './login.validation';

interface Props {
  onLogin : (login :Login) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;
  

  return (
  <>
    <Card>
      <CardHeader title="Login" />
      <CardContent>
        <Formik 
          onSubmit={onLogin} 
          initialValues={createEmptyLogin()}
          validate={formValidation.validateForm}
        >
          {() => (
          <Form>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <TextFieldComponent name="user" label="Name" />
              <TextFieldComponent 
              name="password"
              label="Password" 
              type="password"                 
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  </>
  );
};