import Layout from "../components/Layout";
import { LoginContext } from "../context/loginContext";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LoginContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </LoginContext>
  );
}

export default MyApp;
