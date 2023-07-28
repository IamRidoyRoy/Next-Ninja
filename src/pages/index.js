import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name="My next App" description="This is my first next.js app" />
      </Head>
      ;<h1>This is HomePage</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
