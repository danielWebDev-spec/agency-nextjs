import Head from "next/head";
import { Intro, Services, Testimonials } from "../components";
import { data, users } from "../data";

export default function Home({ services, testimonies }) {
  return (
    <div>
      <Head>
        <title>Agency</title>
        <meta name="description" content="Agency Website made with NextJS" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials testimonies={testimonies} />
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const services = await data;
    const testimonies = await users;

    return {
      props: { services, testimonies },
    };
  } catch (error) {
    console.log(error);
  }
};
