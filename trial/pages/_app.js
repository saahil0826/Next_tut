import React from "react";
import App from "next/app";
import Navbar from "../components/navbar.js";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
