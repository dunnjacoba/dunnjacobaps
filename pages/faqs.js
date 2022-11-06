import Layout from "../components/layout";
import Link from "next/link";

export default function FAQs() {
  return (
    <Layout>
      <h1>Frequently Asked Questions</h1>
      <div>
        <row>
          <h4>What online resources do you use to help you do your job?</h4>
          <p>
            I tend to lean heavily into the documentation, if the task requires
            an unfamiliar technology. Using Google searches, GitHub and medium
            technical blogs are only a small portion of the resources available
            to gleen infomation from. Slack, Discord communities and Tech
            Twitter are all amazing spaces that are often overlooked when
            sourcing credible information.
          </p>
          <h4>How do you keep your technology skills current?</h4>
          <p>
            The technology field is ever growing, from new languages and
            frameworks to new implementations of current ones, staying on top of
            blogs, communities that share information, documentation and just
            hands on experimentation.
          </p>
          <h4>
            How do you explain technologies used to someone with limited
            technical skills?
          </h4>
          <p>
            I have found that conversationally attempting to make connections
            with an individuals experiences, making analogies in relation to
            theirs. Automechanics, I relate frameworks to kit cars: an out of
            the box starter to apply your own components to, languages to the
            tools in a chest. My gorgeous wife, who is an educator, I would
            relate documentation to the curriculum they use to teach others.
          </p>
          <h4>
            What strengths do you think are most important in a developer?
          </h4>
          <p>
            I believe that strong communication skills and the ability to learn
            are two of the most important traits that anyone is able to bring to
            any role. Technical skills can be taught to someone who is able to
            Asked questions, be taught, and is willing to learn through their
            failure as well as success.
          </p>
          <h4>What kind of tech projects do you work on in your spare time?</h4>
          <p>
            Contributing to Open Source projects on GitHub, finding those issues
            that I can add value to. Utilizing the open source issue finder
            available via{" "}
            <Link target="_blank" href="http://finder.eddiehub.io/">
              http://finder.eddiehub.io/
            </Link>
            , narrowing down issues from GitHub using the search input or
            clickable search options.
          </p>
        </row>
      </div>
    </Layout>
  );
}
