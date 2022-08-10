import { useState } from 'react';
import { useForm } from 'react-hook-form';

// components
import { Page, Container } from '../App';
import { Label, Input, Button, Checkbox } from '../components/Form';

export default function Account() {
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const { handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  function cancel() {
    setShow(!show);
    setAgree(false);
  }

  return (
    <Page
      title={`Rainmap | Account`}
    >
      <section className="flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
          {show ?
            <Delete
              agree={agree}
              setAgree={setAgree}
              cancel={cancel}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
            />
            :
            <Info
              show={show}
              setShow={setShow}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
            />
          }
        </div>
      </section>
    </Page>
  )
}

const Info = ({ show, setShow, onSubmit, handleSubmit }) => (
  <>
    <h2 className="text-xl">Account</h2>
    <p>Manage your data</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <EditInput
          id="email"
          name="Email"
          type="email"
          value={`name@email.com`}
        />
        <EditInput
          id="password"
          name="Password"
          type="password"
          value={`password`}
        />
        <Input
          id="password-repeat"
          type="password"
          placeholder="Repeat password"
        />
        <Button
          name="Save changes"
          disabled="disabled"
        />
      </Container>
    </form>
    <Container>
      <button
        id="delete"
        onClick={() => setShow(!show)}
        className="flex flex-row w-full justify-between items-center"
      >
        <span className="py-3">Delete your account and data</span>
        <span
          className="material-symbols-outlined"
          id="delete-btn"
        >
          delete
        </span>
      </button>
    </Container>
  </>
);

const Delete = ({ agree, setAgree, cancel, onSubmit, handleSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Container>
      <Label
        name="Are you sure?"
      />
      <div className="flex flex-row items-center">
        <Checkbox
          id="check"
          change={(e) => setAgree(e.target.checked)}
          style={{ margin: "0 12px 8px 0" }}
        />
        <Label
          for="check"
          name="Yes, I want to permanently delete my account"
        />
      </div>
      <div className="flex flex-row gap-6 justify-between">
        <Button
          name="Cancel"
          click={() => cancel()}
        />
        <Button
          name="Delete"
          disabled={!agree}
        />
      </div>
    </Container>
  </form>
);



const EditInput = (props) => (
  <div>
    <Label
      for={props.id}
      name={props.name}
    />
    <div className="flex flex-row items-center">
      <Input
        id={props.id}
        type={props.type}
        value={props.value}
        style={{ marginRight: "-50px" }}
      />
      <button
        className="edit"
        onClick={() => document.getElementById(props.id).focus()}
      >
        <span className="material-symbols-outlined">edit</span>
      </button>
    </div>
  </div>
);