//next
import Head from "next/head";

//components
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
          {/* <script
          src="https://cdn.tiny.cloud/1/aj9tbam7x3ifket4ask27aziwkke0u7efnvamyk1w5clyamj/tinymce/6/tinymce.min.js"
          referrerpolicy="origin"
        ></script> */}
        {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}
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
