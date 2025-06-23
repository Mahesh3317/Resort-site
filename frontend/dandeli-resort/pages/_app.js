// /pages/_app.js
import "../styles/Home/globals.css";
import Layout from "@/components/Home/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
  
