import Layout from "../components/layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <div>
        <row>
          <h3>Enthusiastically and Unapologetically Myself</h3>
          <p>
            I wear the hats of husband, father, veteran, developer, enthusiast,
            car guy, gamer, geek and nerd. I have always thought that the
            different hats that we wear shape the person that others believe we
            are, but we are all so much more than what others see.
          </p>
          <Image
            src="/images/octocat-1661640395587.png"
            height={580}
            width={580}
            alt="My Octocat"
          />
          <p>
            I am going to show my age, but my original venture into the field of
            technology was at twelve or thirteen, I was adding{" "}
            <strong>HTML</strong> and <strong>CSS</strong> to MySpace pages and
            random fan pages for various anime. It was the beginning of a hobby
            that really stuck, and over the years evolved. As time progressed, I
            made multiple attempts to learn various disciplines within the field
            of technology and found that software development resonated the
            best.
          </p>
        </row>
      </div>
    </Layout>
  );
}
