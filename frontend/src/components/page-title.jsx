import { Helmet } from "react-helmet-async";

const PageTitle = ({ children }) => (
  <Helmet>
    <title>{children} | PlantCare</title>
  </Helmet>
);

export default PageTitle;
