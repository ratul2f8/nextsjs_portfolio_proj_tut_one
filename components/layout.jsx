import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ children, title }) => {
  return (
    <div className="root">
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <br />
        <Link href="/about">
          <a>About</a>
        </Link>
        <br />
        <Link href="/hireme">
          <a>Hire Me</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </header>
      <h2>{title}</h2>
      {children}
      <footer>&copy; {new Date().getFullYear()}</footer>
      <style jsx>
        {`
          .root {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
            width: 100vw;
          }
          header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2rem;
            background: indigo;
          }
          header a {
            color: darkgrey;
            text-decoration: none;
          }
          header a:hover {
            cursor: pointer;
            font-weight: bold;
            color: lightgrey;
          }
          footer {
            paddinf: 1em;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            margin: 0;
            background: #f0f0f0;
            font-size: 110%;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};
export default Layout;
