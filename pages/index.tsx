import type { NextPage } from "next";
import Head from "next/head";
import IssueList from "../components/IssueList";
import LandingHeader from "../components/LandingHeader";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>gitwin - Home</title>
        <meta name="description" content="Break free from your 9–5 to work on open source projects that matter." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="overflow-hidden">
          <LandingHeader />
          <IssueList />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
