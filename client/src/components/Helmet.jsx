import { Helmet } from "react-helmet";

export const Title = (props) => (
  <Helmet>
    <title>Rainmap | {props.title}</title>
  </Helmet>
)