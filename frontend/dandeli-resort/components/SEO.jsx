import Head from "next/head";

export default function SEO({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Book Dandeli resorts with adventures." />
      {/* other SEO tags */}
    </Head>
  );
}
