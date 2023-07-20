import Main from "components/Main/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>林 :: Forest Park || Full Stack Developer</title>
        <meta
          name="description"
          content="林 :: Forest Park || Full Stack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex row-auto content-center items-center">
        <Main />
      </div>
    </>
  );
}
