const { default: Footer } = require("../../components/Footer");
import Invoice from "../../components/Invoice";

function invoice() {
  return (
    <div className="flex flex-col h-screen">
      <Invoice />
      <Footer />
    </div>
  );
}

export default invoice;
