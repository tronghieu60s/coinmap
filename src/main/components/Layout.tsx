import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div className="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
