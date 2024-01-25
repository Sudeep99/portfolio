import Image from "next/image";
import Link from "next/link";
import SkillsTable from "./skillstable";
import EducationTable from "./educationtable";
import { Linkedin, Github, Code } from 'lucide-react';
import { Chip, Button } from "@nextui-org/react";

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
              <Button color="primary" variant="ghost" startContent={<Linkedin />}>
                LinkedIn
              </Button>
            </Link>
            <Link
              className="mr-4"
              href="https://www.github.com/Sudeep99"
              target="_blank"
            >
              <Button color="secondary" variant="ghost" startContent={<Github />}>
                GitHub
              </Button>
            </Link>
            <Link
              className="mr-4"
              href="https://www.hackerrank.com/profile/kumarpsudeep99"
              target="_blank"
            >
              <Button color="success" variant="ghost" startContent={<Code />}>
                Hackerank
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <div className="introduction w-1/2">
        <h2 className="mt-5">Welcome to my Portfolio,</h2>
        <p>
          I&apos;m Sudeep Kumar P, a Software Engineer. I&apos;ve been working
          on building Windows applications using Qt/QML and also C# with
          WinForms and have around 2.5 years of experience for the same.
        </p>
      </div>

      <div className="skillset mt-5">
        <h2 className="text-4xl mb-5 text-center">Skillset</h2>
        <SkillsTable />
      </div>

      <div className="work-ex mt-5 w-3/5">
        <h2 className="text-4xl text-center">Work Experience</h2>

        <h4 className="mt-5"><b>Thermo Fisher Scientific</b></h4>
        <p><i>Software Engineer I</i></p>
        <p><i>Jul 2021 - present</i></p>
        <Chip size="sm" variant="bordered">C++</Chip><Chip size="sm" variant="bordered">C#</Chip><Chip size="sm" variant="bordered">QML</Chip><Chip size="sm" variant="bordered">.Net Framework</Chip>
        <Chip size="sm" variant="bordered">SQL</Chip><Chip size="sm" variant="bordered">GitHub</Chip><Chip size="sm" variant="bordered">PostgreSQL</Chip>
        <Chip size="sm" variant="bordered">OPC Unified Architecture (OPC UA)</Chip><Chip size="sm" variant="bordered">REST APIs</Chip>
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

        <h4 className="mt-5"><b>Thermo Fisher Scientific</b></h4>
        <p><i>Intern, Research & Development</i></p>
        <p><i>Dec 2020 - Jun 2021</i></p>
        <Chip size="sm" variant="bordered">Python</Chip><Chip size="sm" variant="bordered">OpenCV</Chip><Chip size="sm" variant="bordered">C++</Chip><Chip size="sm" variant="bordered">Linux</Chip>
        <Chip size="sm" variant="bordered">TCP/IP</Chip><Chip size="sm" variant="bordered">MQTT</Chip>
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

        <h4 className="mt-5"><b>First Outcomes</b></h4>
        <p><i>Intern</i></p>
        <p><i>Sep 2020 - Oct 2020</i></p>
        <Chip size="sm" variant="bordered">DialogFlow</Chip><Chip size="sm" variant="bordered">RestAPIs</Chip>
        <ul>
          <li>
            Built and tested AI chatbots using DialogFlow and made Performance reports
          </li>
        </ul>

        <h4 className="mt-5"><b>Voltas Limited - A TATA Enterprise</b></h4>
        <p><i>Intern</i></p>
        <p><i>May 2019</i></p>
        <Chip size="sm" variant="bordered">SCADA</Chip><Chip size="sm" variant="bordered">Electrical Engineering</Chip>
        <ul>
          <li>
            Internship at the Chennai Metro Rail Limited Project. Studied Power distribution systems and SCADA interfaces.
          </li>
        </ul>

        <h4 className="mt-5"><b>Hindustan Coca-Cola Beverages Pvt Ltd</b></h4>
        <p><i>Intern</i></p>
        <p><i>Apr 2019</i></p>
        <ul>
          <li>
            Researched and Updated all required and needed materials for the Firm and partners.
          </li>
        </ul>
      </div>

      <div className="education mt-5">
        <h2 className="text-4xl mb-5 text-center">Education</h2>
        <EducationTable />
      </div>
      <footer className="mt-5">
        <p>&copy; Copyright 2024 Sudeep Kumar P</p>
      </footer>
    </main>
  );
}