import Layout from "../components/Layout";
import { LoginContext } from "../context/loginContext";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import rootReducer from "../reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LoginContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </LoginContext>
    </Provider>
  );
}

export default MyApp;
