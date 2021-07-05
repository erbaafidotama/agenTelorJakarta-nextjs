import ContentCheckout from "../components/ContentCheckout";
const { default: Navbar } = require("../components/Navbar");
const { default: Footer } = require("../components/Footer");

function checkout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <ContentCheckout />
      <Footer />
    </div>
  );
}

export default checkout;
