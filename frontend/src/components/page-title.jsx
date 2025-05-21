import { Helmet } from "react-helmet-async";

const PageTitle = ({ children }) => (
  <Helmet>
    <title>{children} | Play Store Clone</title>
  </Helmet>
);

export default PageTitle;
