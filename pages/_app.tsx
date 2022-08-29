import React from "react";
import { NextPageContext } from "next";
import { AppProps } from "next/app";
import "../styles/style.css";

interface Props extends AppProps {
  ctx: NextPageContext;
}

function Application({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default Application;
