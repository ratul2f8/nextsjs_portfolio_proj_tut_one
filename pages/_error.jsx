import Layout from "../components/layout";
export default ({ statusCode }) => (
  <Layout title="Error!!!">
    <p>
      {statusCode
        ? `Sorry, couldn't load your user data :Status Code ${statusCode}`
        : "Couldn't get the page, sorry :("}
    </p>
  </Layout>
);
