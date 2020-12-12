import Layout from "../components/layout";
import Link from "next/link";
const PostLink = ({ title, content, slug}) => (
  <li>
    <Link as = {`/${slug}`}href={`/post?title=${title}`}>
      <a> {`${content}`}</a>
    </Link>
  </li>
);
const Blog = () => {
  return (
    <Layout title="My Blogs">
      <ul>
          <PostLink slug="react-post" title="React" content="React Post"/>
          <PostLink slug="angular-post" title="Angular" content="Angular Post"/>
          <PostLink slug="vue-post" title="Vue" content="Vue Post"/>
      </ul>
    </Layout>
  );
};
export default Blog;
