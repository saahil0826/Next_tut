import React, { Component } from "react";
import axios from "axios";
import Link from "next/Link";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = res.data;
    return { posts: data };
  }

  render() {
    const {posts} = this.props;
    return (
      <div>
        <h1>This is the home page</h1>
        <ul>
          {posts.map(p => (
            <li key={p.id}>
            <Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}><a>{p.title}</a></Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
