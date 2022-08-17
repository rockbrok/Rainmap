import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Label, Input, Button, Path, Checkbox, showPassword } from '../components/Form';
import { t } from 'i18next';
import axios from 'axios';

// components
import { Page, Section, Container, H2 } from '../App';

export default function Login() {
  const [show, setShow] = useState(false);
  const { handleSubmit, formState: { errors } } = useForm();

  const [value, setValue] = useState({
    email: '',
    password: '',
    passwordRepeat: '',
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = async() => {
    try {
      await axios({
        method: "post",
        url: "/register",
        data: {
          email: value.email,
          password: value.password,
          passwordRepeat: value.passwordRepeat,
        },
        headers: { "Content-Type": "application/json"},
      });
    } catch(error) {
      console.log(error.response.data)
    }
  }

  return (
    <>
      {show ?
        <Form
          title={`Rainmap | Register`}
          name="Register"
          form={
            <RegisterForm
              onSubmit={onSubmit}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              value={value}
              show={show}
              setShow={setShow}
            />
          }
        />
        :
        <Form
          title={`Rainmap | Login`}
          name="Login"
          form={
            <LoginForm
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              show={show}
              setShow={setShow}
            />
          }
        />
      }
    </>
  )
}

const Form = (props) => (
  <Page
    title={props.title}
  >
    <Section>
      <H2
        name={props.name}
        margin="-4px"
      />
      {props.form}
    </Section>
  </Page>
);

const LoginForm = ({ onSubmit, handleSubmit, show, setShow }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Container>
      <Label
        for="email"
        name="Email address"
      />
      <Input
        id="email"
        type="email"
        placeholder="Enter email"
      />
      <Label
        for="password"
        name="Password"
      />
      <Input
        id="password"
        type="password"
        placeholder="Password"
      />
      <div className="flex items-center mb-6">
        <Checkbox
          id="check"
          click={showPassword}
        />
        <Label
          for="check"
          click={!showPassword}
          name="Show password"
          style={{ marginTop: "8px" }}
        />

      </div>
      <Button
        name="Sign in"
      />
      <Path
        description="Not a member?&nbsp;"
        path="/register"
        name="Register"
        show={show}
        setShow={setShow}
      />
    </Container>
  </form>
);

const RegisterForm = ({ onSubmit, handleSubmit, show, setShow, handleChange, value }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Container>
      <Label
        for="email"
        name="Email address"
      />
      <Input
        id="email"
        type="email"
        change={handleChange}
        value={value.email}
        placeholder="Enter email"
      />
      <Label
        for="password"
        name="Password"
      />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <Input
          id="password"
          type="password"
          change={handleChange}
          value={value.password}
          placeholder="Password"
          describedby="passwordHelp"
        />
        <Input
          id="passwordRepeat"
          type="password"
          change={handleChange}
          value={value.passwordRepeat}
          placeholder="Repeat password"
          describedby="passwordHelp"
        />
        <small
          id="passwordHelp"
          className="block mt-1 text-xs text-gray-600">
          Enter at least 8 characters.
        </small>
      </div>
      <div className="flex items-center mb-6">
        <Checkbox
          id="check"
          click={showPassword}
        />
        <Label
          for="check"
          click={!showPassword}
          name="Show password"
          style={{ marginTop: "8px" }}
        />
      </div>
      <Button
        name="Sign up"
      />
      <Path
        description="Already a member?&nbsp;"
        path="/login"
        name="Login"
        show={show}
        setShow={setShow}
      />
    </Container>
  </form>
);