import Head from "next/head";
import { Container } from "react-bootstrap";
import ServiceComponent from "./components/ServiceComponent";
import TopComponent from "./components/TopComponent";
import AboutComponent from "./components/AboutComponent";
import DownloadComponent from "./components/DownloadComponent";
import ContactComponent from "./components/ContactComponent";


export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopComponent />
        <div style={{ marginTop: "100px" }} >
        <ServiceComponent />
        </div>
        <AboutComponent />
        <div style={{ marginTop: "100px" }} >
        <DownloadComponent />
        </div>
        <ContactComponent />
      </main>

      <footer className="footer">
        <h5>FOODO &copy; themukherjee</h5>
      </footer>
    </div>
  );
}