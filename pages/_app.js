import Footer from "../components/footer";
import Header from "../components/header";
import { Provider } from "../context/state";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Header>
        <Component {...pageProps} />
      </Header>
      <Footer/>
    </Provider>
  );
}

export default MyApp;
