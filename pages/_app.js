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

// Page.getInitialProps = async ({ store, res }) => {
//   if (res) {
//       // res available only at server
//       // no-store disable bfCache for any browser. So your HTML will not be cached
//       res.setHeader('Cache-Control', 'no-store');
//   }

//   await store.dispatch(action());
//   return {};
// };