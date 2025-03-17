import Head from "next/head";
import { Container } from "react-bootstrap";
import TopComponent from "./components/TopComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopComponent />
      </main>

      <footer>
      </footer>
    </div>
  );
}