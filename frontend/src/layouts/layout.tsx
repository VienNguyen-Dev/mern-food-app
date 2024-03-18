import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header />
      {showHero && <Hero />}

      <div className=" container py-10 flex-1 mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
