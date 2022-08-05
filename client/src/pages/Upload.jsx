import { Helmet } from 'react-helmet';

// components
import { Page } from '../App';

export default function Upload() {
  return (
    <Page>
      <Helmet>
        <title>
          Rainmap | Upload
        </title>
      </Helmet>
      <section className="flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
          <p>
            Add audio to the Rainmap database by uploading your own recordings of rain sounds below.
          </p>
          <div className="rounded border border-gray-200 p-6">
            <h2 className="text-xl mb-5">Upload audio</h2>
            <p>
              Manage your account, and upload sounds to Rainmap.
            </p>
          </div>
        </div>
      </section>
    </Page>
  )
}