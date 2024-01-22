import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl mb-5">Sudeep Kumar P</h1>
      <header>
        <div className="contact-info">
          <nav>
            <Link
              className="mr-4"
              href="https://www.linkedin.com/in/sudeep-kumar-p/"
              target="_blank"
            >
              <button>LinkedIn</button>
            </Link>
            <Link
              className="mr-4"
              href="https://www.github.com/Sudeep99"
              target="_blank"
            >
              <button>GitHub</button>
            </Link>
            <Link
              className="mr-4"
              href="https://www.hackerrank.com/profile/kumarpsudeep99"
              target="_blank"
            >
              <button>Hackerrank</button>
            </Link>
          </nav>
        </div>
      </header>
      <div className="introduction">
        <h2 className="mt-5">Welcome to my Portfolio,</h2>
        <p>
          I&apos;m Sudeep Kumar P, a Software Engineer. I&apos;ve been working
          on building Windows applications using Qt/QML and also C# with
          WinForms and have around 2.5 years of experience for the same.
        </p>
      </div>

      <div className="skillset mt-5">
        <h2 className="text-4xl">Skillset</h2>
        <table className="skills-table mt-5">
          <thead>
            <tr>
              <th>Category</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Languages</td>
              <td>
                C++, C#, QT Markup Language (QML) Java, Python, Typescript
              </td>
            </tr>
            <tr>
              <td>Hardware</td>
              <td>Arduino, Raspberry Pi, LPC 1768</td>
            </tr>
            <tr>
              <td>Databases</td>
              <td>PostgreSQL, MySQL, PlanetScale DB</td>
            </tr>
            <tr>
              <td>Software</td>
              <td>GitHub, NI LabVIEW, MATLAB Simulink, VMware , Jira, Visio</td>
            </tr>
            <tr>
              <td>Other Skills</td>
              <td>Experience in Implementing REST API calls and OPC UA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="work-ex mt-5">
        <h2 className="text-4xl">Work Experience</h2>

        <h4 className="mt-5">Thermo Fisher Scientific</h4>
        <p>Software Engineer</p>
        <p>Jul 2021 - present</p>
        <ul>
          <li>
            Currently developing REST API and OPC UA client functionality in C#
            for an Industrial Gauging product which gets data from an OPC Server
            and does the necessary REST API calls, using the .NET framework and
            Visual Studio.
          </li>
          <li>
            Received the Rising Star Award for quickly ramping up on the Qt
            Framework and contributing to the project.
          </li>
          <li>
            Developed the Human Machine Interface software (Both Back-end and
            Front-end) for an Industrial Gauging Equipment with C++ and QML with
            QT Creator and assisted the team with critical releases. Worked on
            creating the UI and also the data connectivity from the application
            to our platform via a network. Also worked on setting up and
            maintaining connections from the application to our database.
          </li>
        </ul>

        <h4 className="mt-5">Thermo Fisher Scientific</h4>
        <p>Intern, Research & Development</p>
        <p>Dec 2020 - Jun 2021</p>
        <ul>
          <li>
            Built various Proof of concepts applications using Python and C++,
            deployed it on Windows and Linux systems and tested it.
          </li>
          <li>
            Helped pick hardware for the Industrial Equipment by studying
            datasheets and making Pugh matrices.
          </li>
        </ul>
      </div>

      <div className="education mt-5">
        <h2 className="text-4xl">Education</h2>
        <table className="education-table mt-5">
          <thead>
            <tr>
              <th>School</th>
              <th>Location</th>
              <th>Degree</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vellore Institute of Technology</td>
              <td>Amaravati, Andhra Pradesh</td>
              <td>Bachelors, Electronics and Communications Engineering</td>
              <td>Jul 2017-Jun 2021</td>
            </tr>
            <tr>
              <td>Padma Seshadri Bala Bhavan - K.K Nagar</td>
              <td>Chennai, Tamil Nadu</td>
              <td>High School</td>
              <td>Jun 2015-May 2017</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="mt-5">
        <p>&copy; Copyright 2024 Sudeep Kumar P</p>
      </footer>
    </main>
  );
}
