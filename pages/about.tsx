import { Fragment, ReactElement } from "react";
import { Layout } from "../components/layout";
import Meta from "../components/meta";
import Container from "../components/container";
import Nav from "../components/nav";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <section className="flex flex-col col-span-9 text-left lg:mt-80 mt-24 lg:col-span-3">
          <div className="flex flex-col lg:flex-row mb-2">
            <h1 className="text-4xl font-medium pr-2">Hi, I&apos;m</h1>
            <h1 className="text-4xl font-extrabold">Tyler Callison</h1>
          </div>
          <p className="text-lg font-medium">
            I am currently a student at SDSU and a UI Engineer Intern @
            Crowdstrike
          </p>
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
        keywords="tyler, callison, software, website, web, developer, ui, engineer, home"
      />
      <Nav />
      <main>{page}</main>
    </Layout>
  );
};

export default Home;
