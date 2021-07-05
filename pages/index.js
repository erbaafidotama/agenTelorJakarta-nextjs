const { default: Content } = require("../components/Content");
const { default: Footer } = require("../components/Footer");
const { default: Header } = require("../components/Header");
const { default: Navbar } = require("../components/Navbar");

function index() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {/* <Header /> */}
      <Content />
      <Footer />
    </div>
  );
}

export default index;
