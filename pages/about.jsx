import Layout from "../components/layout";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

class About extends Component {
  //componentDidMount
  static async getInitialProps() {
    const response = await fetch("https://api.github.com/users/ratul2f8");
    const statusCode = response.status > 200 ? response.status : false
    const data = await response.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode  } = this.props;
    if(statusCode){
      return <Error statusCode = {statusCode}/>
    }
    return (
      <Layout title="About">
        <h3>{user.name}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img src={user.avatar_url} alt="ratul" height="200px" width="200px" />

          <img
            src="/static/js-logo.png"
            height="200px"
            width="200px"
            alt="js-logo"
          />
        </div>
        <br />
        {user.bio}
      </Layout>
    );
  }
}
export default About;
