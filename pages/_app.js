import "tailwindcss/tailwind.css";
import "../styles/invoice.css";
import { ValueProvider } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    <ValueProvider>
      <Component {...pageProps} />
    </ValueProvider>
  );
}

export default MyApp;
