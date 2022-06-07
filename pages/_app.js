import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#f4f4f4] min-h-screen text-gray-600">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
