const { default: Content } = require("../components/Content");
const { default: Footer } = require("../components/Footer");
const { default: Header } = require("../components/Header");
const { default: Navbar } = require("../components/Navbar");

import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Agen Telor Jakarta</title>
        <meta content="Agen Telor Jakarta" key="Agen Telor" />
      </Head>
      <div className="flex flex-col h-screen">
        <Navbar />
        {/* <Header /> */}
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default index;
