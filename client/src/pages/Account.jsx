// components
import { Page } from '../App';
import { Label, Input, Button } from '../components/Form';

export default function Account() {
  return (
    <Page
      title={`Rainmap | Account`}
    >
      <section className="flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
          <h2 className="text-xl">Account</h2>
          <p>
            Manage your data
          </p>
          <div className="flex flex-col rounded border border-gray-200 p-6 w-[448px] gap-6">
            <div>
              <Label
                for="email"
                name="Email"
              />
              <div className="flex flex-row items-center">
                <Input
                  id="email"
                  type="email"
                  value={`name@email.com`}
                  style={{ marginRight: "-50px" }}
                />
                <button
                  id="edit"
                  onClick={() => document.getElementById("email").focus()}
                >
                  <span class="material-symbols-outlined">edit</span>
                </button>
              </div>
            </div>
            <div>
              <Label
                for="password"
                name="Password"
              />
              <div className="flex flex-row items-center">
                <Input
                  id="password"
                  type="password"
                  value={`password`}
                  style={{ marginRight: "-50px" }}
                />
                <button
                  id="edit"
                  onClick={() => document.getElementById("password").focus()}
                >
                  <span class="material-symbols-outlined">edit</span>
                </button>
              </div>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Repeat password"
            />
            <Button
              name="Save changes"
              disabled="disabled"
            />
          </div>
          <div className="rounded border border-gray-200 p-6 w-[448px]">
            <button id="delete" className="flex flex-row w-full justify-between items-center">
            <span className="py-3">Delete your account and data</span>
            <span
              className="material-symbols-outlined"
              id="delete-btn"
            >
              delete
            </span>
            </button>
          </div>
        </div>
      </section>
    </Page>
  )
}