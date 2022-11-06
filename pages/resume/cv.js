import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>{resumeData.title}</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <u>
        <Link href="https://linkfree.eddiehub.io/dunnjacoba">My links</Link>
      </u>
      <h2>Languages, Technologies, and Clearance</h2>
      <li>
        {" "}
        <strong>
          <u>BACK END</u>
        </strong>
        : SQL, TSQL, Microsoft SQL Server Management Studio
      </li>{" "}
      <li>
        {" "}
        <strong>
          <u> MIDDLE TIER</u>
        </strong>
        : C#, .Net, .Net Core, .Net Framework, ASP.Net, Visual Studio
      </li>{" "}
      <li>
        {" "}
        <strong>
          <u> FRONT END</u>
        </strong>
        : CSS3, HTML5, BootStrap, JavaScript, React, Yarn, Visual Studio Code
      </li>{" "}
      <li>
        {" "}
        <strong>
          <u>GENERAL DEVELOPMENT</u>
        </strong>
        : AJAX, Axios, RESTful APIs, Postman, Version Control, Git, GitHub,
        Agile/Scrum Methodologies, Chrome Developer Tools
      </li>{" "}
      <li>
        <strong>
          <u>SECURITY CLEARANCE</u>
        </strong>
        : Active Secret
      </li>{" "}
      <h2>
        <u>WORK EXPERIENCE</u>
      </h2>{" "}
      <h3>
        <u>Full Stack Software Developer @ The Seam</u> October 2022 - Current{" "}
      </h3>{" "}
      <li>Utilizing dotNet to create solutions for customer problems.</li>{" "}
      <li>
        Diving into SQL in a whole new way, learning that the logic in stored
        procedures can power business in ways I had never seen previously.
      </li>{" "}
      <h3>
        <u>Software Development Consultant</u> July 2022 - Current{" "}
      </h3>{" "}
      <li>Generating creative solutions to Open Source issues.</li>{" "}
      <li>
        {" "}
        Searching GitHub repositories for issues that require the skills that
        relate to my knowledge base, or those raised where I am able to add
        value.
      </li>{" "}
      <h3>
        <u>Software Engineer @ Kommu</u> March 2022 - August 2022{" "}
      </h3>{" "}
      <li>
        Utilizing REACT.js and other libraries, Loki for example, to create a
        dynamic stepped form for users to input data, which was then added to
        the database via .Net middle tier logic.{" "}
      </li>{" "}
      <li>
        {" "}
        Built into the application websockets to act as a constant connection
        for a messaging feature, then leveraged Microsoft’s SignalR within
        ASP.NET Core to integrate the real-time chat feature and help reduce
        unneeded code in the middle tier and React components.
      </li>{" "}
      <li>
        {" "}
        Designed data tables and created complex stored procedures within SQL
        Server, utilizing various DDL, DML, DQL, and TCL commands.{" "}
      </li>{" "}
      <li>
        {" "}
        Developed RESTful API controllers that connected and processed
        client-side requests to the database with .NET, tested the controllers
        with a third-party application (Postman) and localhost direct http
        requests.
      </li>{" "}
      <li>
        {" "}
        Implemented data validation, both client side and server side, through
        data annotation on models in .Net and utilizing the prop-types library
        alongside eslint in React.js.{" "}
      </li>{" "}
      <li>
        {" "}
        Designed custom models, domains, interfaces, services, and API endpoints
        using .NET Core framework and C# language to connect front-end and
        back-end functionality.
      </li>{" "}
      <li>
        {" "}
        Utilized Git, on GitHub, as version control among peers to ensure code
        quality and continuity.
      </li>{" "}
      <li>
        {" "}
        Assisted peers, through mentoring, peer coding sessions, code review,
        and refactoring of errant code which helped improve performance of the
        application.
      </li>
      <li>
        {" "}
        Participated in daily stand-up meetings, assisting peers in breaking
        down large tasks into manageable daily goals, to maintain workflow and
        troubleshoot any blockers as they arose.{" "}
      </li>
      <h3>
        {" "}
        <u>Noncommissioned Officer @ Tennessee Army National Guard</u> March
        2010 - July 2022 (ING){" "}
      </h3>{" "}
      <li>
        Trained over four hundred soldiers and air guard in small arms training
        on the modular SigSauer M17 weapon system. This training was the
        introduction of the new sidearm to the TNARNG and TNANG, which was vital
        in qualifying all the personnel present to not only safely handle the
        weapon but also obtain their weapon qualifications. This training
        resulted in a 100% certification rate among those present.{" "}
      </li>{" "}
      <li>
        {" "}
        Facilitated task force travel management for over two hundred and fifty
        national guard personnel. Acting on behalf of the personnel, each was
        able to retain the ability to traverse the state whenever the mission
        required.
      </li>{" "}
      <li>
        {" "}
        Maintained multimillion dollar equipment, ranging from vehicles to
        electronics, while utilizing documentation to ensure each item was kept
        in full operational condition.
      </li>{" "}
      <li>
        {" "}
        Organized improvised training during civil disturbance missions to
        ensure that the members of the available elements behaved in accordance
        with regulations, minimalized use of force where applicable, and
        understood the use of issued equipment. Each engagement with civilian
        populace was resolved without incident.
      </li>{" "}
      <li>
        {" "}
        Recipient of multiple Army Commendation medals and the Air Force
        Commendation medal while executing duties as a Noncommissioned Officer
        within the Tennessee Army National Guard.
      </li>{" "}
      <h3>
        <u>Internal Affairs Officer @ Shelby County Division of Corrections</u>{" "}
        November 2017 - December 2021{" "}
      </h3>{" "}
      <li>
        {" "}
        Reduced the influx of illegal substance abuse in the facility by 20%
        from the year 2018-2019 with the examination of compiled metrics via
        drug screening, data from investigators, regarding the transport,
        enclosures used, and any tips of frequency.
      </li>{" "}
      <li>
        {" "}
        Managed extensive records on all activities when engaging with,
        training, and requalifying Correctional Officers in matters of policies
        and procedures regarding the care and custody of those incarcerated.
      </li>{" "}
      <li>
        Coordinated training measures with multiple other agencies, to include
        the Tennessee Bureau of Investigation, Drug Enforcement Agency, Shelby
        County Sheriff’s Office, and various local municipalities to generate
        interagency cohesion, and foster a unified canine training operation.
        The control location was a deactivated wing, the live facility event
        generated more than four pounds of illicit substances, varying weapons
        and multiple arrests of civilian workers and county employees.
      </li>{" "}
      <li>
        Recipient of the letter of Commendation from the Shelby County Mayor
        Mark H Luttrell, Jr.{" "}
      </li>
    </Layout>
  );
}

let resumeData = {
  title: "",
  contentHtml: "",
};
