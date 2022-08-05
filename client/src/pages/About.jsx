import { Helmet } from 'react-helmet';
import { t } from 'i18next';

// components
import { Page } from "../App"

export default function About() {
  return (
    <Page>
      <Helmet>
        <title>Rainmap | {t("nav.about")}</title>
      </Helmet>
      <section className="flex flex-col items-center">
      <div className="gap-6 items-center my-8 px-8 max-w-lg text-gray-700">
        <h2 className="text-xl mb-5">{t("about.about")}</h2>
        <p>
          Rainmap was developed by two awesome programmers who both enjoy Taco Bell and bubble tea.
        </p>
        <hr className="my-6 border-gray-300" />
        <p>
          For legal reasons, we are unable to comment on any questions in regards to our awesomeness.
        </p>
      </div>
      </section>
    </Page>
  )
}