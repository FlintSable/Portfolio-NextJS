import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Container from "../components/Container";
import userData from "@constants/data";


import MainLanding from "../components/MainLanding";
import Header from "../components/Header";
import About from "../components/About";

export default function Home() {
  return (
    <Container
      title="Nicholas Noochla-or - Developer">
      <script src="./nav.js"></script>
      </Container>
      

  );
}
