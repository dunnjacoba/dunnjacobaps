import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Image from "next/image";

export default function Kommu() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <h2>Kommu</h2>

        <h3>Chat Feature</h3>
        <Image
          src="/images/KommuChat.png"
          height={480}
          width={480}
          alt="Kommu Chat feature"
        />
        <p>
          The Kommu Chat was intended for end users to have a means of
          communication with their connections. This component was created using{" "}
          <strong>React.js</strong>, utilizing <strong>JavaScript</strong>, and{" "}
          <strong>ASP.Net</strong>, leveraging the <strong>SignalR</strong>{" "}
          library to route messages via established websocket connections
          through the middle tier then to it's intented recipient.
        </p>
        <h3>Dynamic Event Form</h3>
        <Image
          src="/images/KommuEW.png"
          height={480}
          width={480}
          alt="Kommu Event Wizard"
        />
        <p>
          Leveraging the libraries <strong>Loki</strong>,{" "}
          <strong>Formik</strong> and <strong>CKEditor</strong>, the seemingly
          paginated form was for users and admin who wished to create an event
          entry to be displayed for all users to see. The input fields on the
          form would all update the state object upon clicking the "Next"
          button, and just before submission the user was given a preview of the
          graphical representation on the site. Each{" "}
          <code>
            <select>
              <option>Dropdown</option>
            </select>
          </code>{" "}
          was populated by a custom API call that retrieved information from the
          server and generated options based upon the information retrieved.
        </p>
      </div>
    </Layout>
  );
}
