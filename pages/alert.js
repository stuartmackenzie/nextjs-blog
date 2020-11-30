import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.sass";

import Alert from "../components/Alert/Alert";

export default function AlertPage() {
  const type = "success";

  const errorMessage = "Error Occured";
  const successMessage = "Success!";
  const message = type === "error" ? errorMessage : successMessage;

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Alert type={type}>{message}</Alert>
      </section>
    </Layout>
  );
}
