//next
import Head from "next/head";

//components
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

//other
import { Provider } from "../context/state";
import "../styles/global.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          rel="stylesheet"
        />
        {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script
          src="https://cdn.tiny.cloud/1/u821xwx8p1gjb82hfruh78v5y75zft032appz0nyabz44f9w/tinymce/6/tinymce.min.js"
          referrerpolicy="origin"
        ></script> */}
      </Head>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
