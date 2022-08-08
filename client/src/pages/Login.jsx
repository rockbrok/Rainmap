import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Label, Input, Button, Path, Checkbox } from '../components/Form';
import { t } from 'i18next';

// components
import { Page } from '../App';

export default function Login() {
  const [show, setShow] = useState(false);
  const { handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {show ?
        <Page
          title={`Rainmap | Register`}
        >
          <Form
            form={
              <RegisterForm
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                show={show}
                setShow={setShow}
              />
            }
          />
        </Page>
        :
        <Page
          title={`Rainmap | Login`}
        >
          <Form
            form={
              <LoginForm
                onSubmit={onSubmit}
                handleSubmit={handleSubmit}
                show={show}
                setShow={setShow}
              />
            }
          />
        </Page>
      }
    </>
  )
}

const Form = (props) => (

  <section className="grid grid-rows-1 grid-cols-7 grid-flow-row-dense gap-6 px-8 w-full mb-6">
    <div
      className="row-span-1 col-start-2 col-end-4 
        p-5 
        text-white 
        h-[24rem] 
        bg-[url('https://live.staticflickr.com/6205/6135740904_988084a60a_b.jpg')] bg-bottom bg-cover bg-no-repeat 
        rounded-lg border border-gray-200 shadow-md 
        dark:bg-gray-800 dark:border-gray-700"
    />
    <div className="grid row-span-1 col-span-3">
      {props.form}
    </div>
  </section>

);

const LoginForm = ({ onSubmit, handleSubmit, show, setShow }) => (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-4"
  >
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
      />
      <Label
        for="check"
        name="Remember me"
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
  </form>
)


const RegisterForm = ({ onSubmit, handleSubmit, show, setShow }) => (
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-4"
  >
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
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
      <Input
        id="password"
        type="password"
        placeholder="Password"
        describedby="passwordHelp"
      />
      <Input
        id="password-repeat"
        type="password"
        placeholder="Repeat password"
        describedby="passwordHelp"
      />
      <small
        id="passwordHelp"
        className="block mt-1 text-xs text-gray-600">
        Enter at least 8 characters.
      </small>
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
  </form>
)