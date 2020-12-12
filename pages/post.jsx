import Layout from "../components/layout";
import {withRouter} from "next/router";
const Post =  ({router}) => {
  return (
    <Layout title={router.query.title}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
        accusamus neque! Accusamus cupiditate, libero dolore quae ut culpa
        dolores expedita consectetur earum, aut magnam maxime, eos sequi
        nesciunt rerum assumenda.
      </p>
    </Layout>
  );
};
export default withRouter(Post);
