import { t } from 'i18next';
import { useForm } from 'react-hook-form';

// components
import { Page } from "../App"
import { Label, Input, Button } from '../components/Form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Page
      title={`Rainmap | Contact`}
    >
      <section className="flex flex-col items-center">
        <div className="gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
          <h2 className="text-xl mb-5 text-center">Contact Us</h2>
          <Form 
            handleSubmit={handleSubmit} 
            onSubmit={onSubmit} 
            register={register} 
          />
        </div>
      </section>
    </Page>
  )
}

const Form = ({ handleSubmit, onSubmit, register }) => (
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col rounded border border-gray-200 p-6 w-[448px] gap-3">
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
  </form>
)