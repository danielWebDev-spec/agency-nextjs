import Head from "next/head";
import { Intro, Services, Testimonials } from "../components";
import { data } from "../data";

export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>Agency</title>
        <meta name="description" content="Agency Website made with NextJS" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = await data;

  return {
    props: { services },
  };
};
