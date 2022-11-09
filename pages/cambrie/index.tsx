import { Fragment, ReactElement } from "react";
import { Layout } from "../../components/layout";
import Meta from "../../components/meta";
import Container from "../../components/container";

const Cambrie = () => {
  return (
    <Fragment>
      <Container>
        <section className="flex md:flex-row flex-col col-span-12 text-center h-screen justify-center items-center">
          <h2 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-black py-2 mr-4">
            Hey
          </h2>
          <h2 className="text-6xl cambrie md:text-8xl font-extrabold bg-clip-text text-transparent py-2">
            Cambrito.
          </h2>
        </section>
      </Container>
    </Fragment>
  );
};

Cambrie.getLayout = function getLayout(page: ReactElement) {
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

export default Cambrie;
