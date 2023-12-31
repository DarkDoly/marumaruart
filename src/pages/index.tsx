import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
        <Hero />
        <PostCount />
        <About />
        <Benefits />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Home;

const Header: React.FC = () => {
  return <header>MaruMaruArt (Header)</header>;
};

const Hero: React.FC = () => {
  return <section>Hero</section>;
};

const PostCount: React.FC = () => {
  return <section>PostCount</section>;
};

const About: React.FC = () => {
  return <section>About</section>;
};

const Benefits: React.FC = () => {
  return <section>Benefits</section>;
};

const Features: React.FC = () => {
  return <section>Features</section>;
};

const FAQ: React.FC = () => {
  return <section>FAQ</section>;
};

const CTA: React.FC = () => {
  return <section>CTA</section>;
};

const Footer: React.FC = () => {
  return <footer>Footer</footer>;
};
