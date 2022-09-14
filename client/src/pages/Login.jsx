import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Label,
  Input,
  Button,
  Path,
  Checkbox,
  showPassword,
} from "../components/Form";
import { t } from "i18next";

// components
import { Page, Section, Container, H2 } from "../App";

export default function Login() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <>
      {show ? (
        <Form
          title={`Rainmap | Register`}
          name="Register"
          form={
            <RegisterForm
              handleSubmit={handleSubmit}
              errors={errors}
              watch={watch}
              register={register}
              show={show}
              setShow={setShow}
            />
          }
        />
      ) : (
        <Form
          title={`Rainmap | Login`}
          name="Login"
          form={
            <LoginForm
              handleSubmit={handleSubmit}
              show={show}
              setShow={setShow}
            />
          }
        />
      )}
    </>
  );
}

const Form = (props) => (
  <Page title={props.title}>
    <Section>
      <H2 name={props.name} margin="-4px" />
      {props.form}
    </Section>
  </Page>
);

const LoginForm = ({ handleSubmit, show, setShow }) => {
  const onSubmit = async () => {
    try {
      await axios({
        method: "post",
        url: "/login",
        data: {
          email: login.email,
          password: login.password,
        },
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Label for="email" name="Email address" />
        <Input
          id="email"
          change={handleChange}
          value={login.email}
          type="email"
          placeholder="Enter email"
        />
        <Label for="password" name="Password" />
        <Input
          id="password"
          change={handleChange}
          value={login.password}
          type="password"
          placeholder="Password"
        />
        <div className="flex items-center mb-6">
          <Checkbox id="check" click={showPassword} />
          <Label
            for="check"
            click={!showPassword}
            name="Show password"
            style={{ marginTop: "8px" }}
          />
        </div>
        <Button name="Sign in" />
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
};

const RegisterForm = ({ watch, errors, handleSubmit, show, setShow }) => {
  const onSubmit = async () => {
    try {
      await axios({
        method: "post",
        url: "/users",
        data: {
          email: register.email,
          password: register.password,
        },
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const password = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Label for="email" name="Email address" />
        <Input
          id="email"
          type="email"
          change={handleChange}
          value={register.email}
          placeholder="Enter email"
        />
        <Label for="password" name="Password" />
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          <div>
            <Input
              reqMessage="Password required"
              minLengthVal="8"
              minLengthMessage="Password must have at least 8 characters"
              id="password"
              type="password"
              change={handleChange}
              value={register.password}
              placeholder="Password"
              describedby="passwordHelp"
            />
            {/* {errors.password && <p>{errors.password.message}</p>} */}
          </div>
          <div>
            <Input
              validateVal={password}
              validateMessage="The passwords do not match"
              id="password-repeat"
              type="password"
              change={handleChange}
              placeholder="Repeat password"
              describedby="passwordHelp"
            />
            {/* {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>} */}
          </div>
          <small id="passwordHelp" className="block mt-1 text-xs text-gray-600">
            Enter at least 8 characters.
          </small>
        </div>
        <div className="flex items-center mb-6">
          <Checkbox id="check" click={showPassword} />
          <Label
            for="check"
            click={!showPassword}
            name="Show password"
            style={{ marginTop: "8px" }}
          />
        </div>
        <Button name="Sign up" />
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
};
