import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Container from "@components/Container/Container";
import Header from "@components/Header/Header";
import MainLanding from '@components/MainLanding/MainLanding';
import About from '@components/About/About';
import Experience from '@components/Experience/Experience';
import userData from "@constants/data";
import Projects from '@components/Projects/Projects';



export default function Home({children, ...customMeta}) {
  const meta = {
    title: "Nicholas Noochla-or - Developer",
    description: "Coding out from the IT trenches.",
    image: "/avatar.png",
    type: "webstie",
    ...customMeta,
  };
  return (
    <Container title="Nicholas Noochla-or - Developer">
      <Head><title>{meta.title}</title></Head>
      <Header />
      <MainLanding />
      <About />
      <Experience/>
      <Projects/>
    </Container>
      

  );
}
