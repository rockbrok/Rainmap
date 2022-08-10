import { t } from 'i18next';
import { Label, Input, Button } from '../components/Form';

// components
import { Page } from "../App"

export default function Contact() {
  return (
    <Page
      title={`Rainmap | Contact`}
    >
      <section className="flex flex-col items-center">
      <div className="gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
        <Form/>
      </div>
      </section>
    </Page>
  )
}

const Form = () => (
  <div className="flex flex-col rounded border border-gray-200 p-6 w-[448px] gap-6">
    <form>
      <Label name="Email" for="email" />
        <Input id="email" placeholder="Email" required />
      <Label name="Title" />
        <Input id="title" placeholder="Title" required />
      <Label name="Description" />
        <textarea 
          id="w3review" 
          name="w3review" 
          rows="4" cols="50" 
          maxLength={500} 
          placeholder="Send us a message ♥" 
          >
        </textarea>
      <Button name="button"/>
    </form>
  </div>
  )