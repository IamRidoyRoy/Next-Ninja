import RootLayout from "../../components/Layouts/RootLayout";

const About = () => {
  return (
    <div>
      <h1>Hey, Are you interest to know about me?</h1>
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
