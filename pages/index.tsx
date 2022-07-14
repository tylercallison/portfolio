import { Fragment, ReactElement } from "react";
import { Layout } from "../components/layout";
import Meta from "../components/meta";

const Home = () => {
  return (
    <Fragment>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - youll be building a site like this in
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Fragment>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Meta />
      <main>{page}</main>
    </Layout>
  );
};

export default Home;
