import { Fragment, ReactElement } from "react";
import { Layout } from "../components/layout";
import Meta from "../components/meta";
import Container from "../components/container";
import Social from "../components/social";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <section className="flex flex-col col-span-12 text-center h-screen justify-center items-center">
          <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent py-2">
            Coming Soon
          </h1>
          <Social />
        </section>
      </Container>
    </Fragment>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Meta
        title="Home"
        description="Tyler Callison - UI Engineer"
        robots={true}
        keywords="tyler, callison, software, website, web, developer, ui, engineer, home, san, diego, state, university, greek, suite, greeksuite"
      />
      <main>{page}</main>
    </Layout>
  );
};

export default Home;
