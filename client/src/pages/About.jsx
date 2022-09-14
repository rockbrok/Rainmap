import { t } from "i18next";

// components
import { Page, Section, H2 } from "../App";

export default function About() {
  return (
    <Page title={`Rainmap | About`}>
      <Section>
        <H2 name={t("about.about")} margin="-4px" />
        <div>
          <p>
            Rainmap was created to aid in the sharing of rain sounds around the
            world. The goal was to create an interactive user interface that
            allows users to share and view audio from around the world based on
            its upload location.
          </p>
          <hr className="my-6 border-gray-300" />
          <p>
            Technologies used in this project include JavaScript, Leaflet.js for
            mapping, PositionStacks' GeoCoding API, React.js, Python Flask,
            i18next for localization, TailwindCSS for their great CSS utility
            classes, among other React hooks and Python packages.
          </p>
        </div>
      </Section>
    </Page>
  );
}
