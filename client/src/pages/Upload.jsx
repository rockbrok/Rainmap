import { Label, Input, Button, Select } from '../components/Form';

// components
import { Page } from '../App';

export default function Upload() {
  return (
    <Page
      title={`Rainmap | Upload`}
    >
      <section className="flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
          <h2 className="text-xl">Upload audio</h2>
          <p>
            Contribute to the Rainmap database
          </p>
          <div className="rounded border border-gray-200 p-6">
            <div class="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <Label
                  for="file"
                  name="Choose a file"
                />
                <Input
                  id="file"
                  type="file"
                  placeholder="No file chosen"
                />
              </div>
              <div class="col-span-3">
                <Label
                  for="country"
                  name="Country / Region"
                />
                <Select
                  id="country"
                >
                  <option value="" disabled selected hidden>Select a country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </Select>
              </div>
              <div class="col-span-3">
                <Label
                  for="city"
                  name="City"
                />
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter city"
                />
              </div>
              <div class="col-span-3">
                <Label
                  for="rain"
                  name="Rain type"
                />
                <Select
                  id="rain"
                >
                  <option value="" disabled selected hidden>Select a type</option>
                  <option>Hard rain</option>
                  <option>Soft rain</option>
                  <option>Hybrid rain</option>
                  <option>Thunder</option>
                </Select>
              </div>
              <div className="col-span-6">
                <Button
                  name="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}