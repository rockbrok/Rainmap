import { t } from "i18next";

// components
import { Page, Section, H2 } from "../App";

export default function About() {
  return (
    <Page title={`Rainmap | ${t("about.about")}`}>
      <Section>
        <H2 name={t("about.about")} margin="-4px" />
        <div>
          <p className="text-center">{t("about.p1")}</p>
          <hr className="my-6 border-gray-300" />
          <p className="text-center">{t("about.p2")}</p>
        </div>
      </Section>
    </Page>
  );
}
