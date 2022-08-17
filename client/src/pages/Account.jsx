import { useState } from 'react';
import { useForm } from 'react-hook-form';

// components
import { Page, Section, Container, H2 } from '../App';
import { Label, Input, Button, Checkbox, showPassword } from '../components/Form';

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
      <Section>
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
      </Section>
    </Page>
  )
}

const Info = ({ show, setShow, onSubmit, handleSubmit }) => (
  <>
    <H2
      name="Account"
      margin="-4px"
    />
    <p>Manage your data</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <EditInput
          id="email"
          name="Update email"
          type="email"
          value={`name@email.com`}
        />
        <EditInput
          id="password"
          name="Update password"
          placeholder="Enter new password"
          type="password"
        />
        <div className="mt-3">
          <Input
            id="password-repeat"
            type="password"
            placeholder="Repeat password"
          />
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
        placeholder={props.placeholder}
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