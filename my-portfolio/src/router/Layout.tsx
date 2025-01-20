import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import React from "react";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
