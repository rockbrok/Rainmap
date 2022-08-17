import { t } from 'i18next';

// components
import { Page, Section, H2 } from "../App"

export default function About() {
  return (
    <Page
      title={`Rainmap | About`}
    >
      <Section>
        <H2
          name={t("about.about")}
          margin="-4px"
        />
        <div>
          <p>
            Rainmap was developed by two awesome programmers who both enjoy Taco Bell and bubble tea.
          </p>
          <hr className="my-6 border-gray-300" />
          <p>
            For legal reasons, we are unable to comment on any questions in regards to our awesomeness.
          </p>
        </div>
      </Section>
    </Page>
  )
}