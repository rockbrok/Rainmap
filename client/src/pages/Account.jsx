import { Helmet } from 'react-helmet';

// components
import { Page } from '../App';

export default function Account() {
  return (
    <Page>
      <Helmet>
        <title>
          Rainmap | Account
        </title>
      </Helmet>
      <section className="flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
          <h2 className="text-xl">Welcome</h2>
          <p>
            Manage your account, and upload sounds to Rainmap.
          </p>
          <div className="rounded border border-gray-200 p-6">
            <h2 className="text-xl mb-5">Basic Info</h2>
            <p>
              Manage your account, and upload sounds to Rainmap.
            </p>
          </div>
          <div className="rounded border border-gray-200 p-6">
            <h2 className="text-xl mb-5">Delete account</h2>
            <p>
              Manage your account, and upload sounds to Rainmap.
            </p>
          </div>
        </div>
      </section>
    </Page>
  )
}
