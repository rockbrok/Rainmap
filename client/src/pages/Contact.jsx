import { t } from 'i18next';
import { useForm } from 'react-hook-form';

// components
import { Page, Section, H2, Container } from "../App"
import { Label, Input, Button } from '../components/Form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Page
      title={`Rainmap | Contact`}
    >
      <Section>
        <H2
          name="Contact Us"
          margin="-4px"
        />
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
        />
      </Section>
    </Page>
  )
}

const Form = ({ handleSubmit, onSubmit, register }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Container>
      <Label
        name="Email"
        for="email"
      />
      <Input
        id="email"
        placeholder="Enter email"
        type="email"
      />
      <Label
        name="Subject"
        for="subject"
      />
      <Input
        id="subject"
        placeholder="Enter subject"
        type="text"
      />
      <Label
        name="Message"
        for="message"
      />
      <textarea {
        ...register("message",
          { required: true })
      }
        id="message"
        rows="4" cols="50"
        maxLength={500}
        placeholder="Enter message"
        className="form-control block
        w-full
        px-3 py-1.5
        text-base font-normal text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300 rounded
        transition ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      >
      </textarea>
      <Button name="Send" />
    </Container>
  </form>
);