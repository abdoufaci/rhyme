import Head from "next/head";
import Banner from "./Banner";
import Nav from "./Nav";
import Show from "./Show";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Nav />
      <Banner />
      <Show />

    </div>
  );
}
