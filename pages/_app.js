import Header from "../components/header";
import { Provider } from "../context/state";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </Provider>
  );
}

export default MyApp;
