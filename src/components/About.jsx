import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Amit, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-yellow-600 font-semibold text-xl">
          Education
        </h1>
        <ul>
          <li className="font-bold">JABALPUR ENGINEERING COLLEGE, JABALPUR (2021-23)</li>
          <li>Master Of Computer Application (MCA)</li>
          <li>SCORE: 7.12 CGPA</li> <br />

          <li className="font-bold">INSTITUTE FOR EXCELLENCE IN HIGHER EDUCATION, BHOPAL (2018-21)</li>
          <li>Bachelor Of Science (CS Honours)</li>
          <li>Score: 65.45%</li><br />

          <li className="font-bold">MODEL HIGHER SECONDARY SCHOOL, BHOPAL (2017-18)</li>
          <li>Board Of Secondary Education, Bhopal (12<sup>th</sup> PCM)</li>
          <li>Score: 84%</li><br />

          <li className="font-bold">MODEL HIGHER SECONDARY SCHOOL, BHOPAL (2015-16)</li>
          <li>Board Of Secondary Education, Bhopal (10<sup>th</sup> All Subjects)</li>
          <li>Score: 85.66%</li><br />

        </ul>
        <h1 className="text-yellow-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <p>
          <ul></ul>
          <li>Proficiency in HTML, CSS, JavaScript,
            and related front-end technologies.</li>
            <li>Proficient in utilizing Tailwind CSS for efficient and rapid front-end development.</li>
          <li> Strong grasp of React.js for building
            interactive user interfaces and single
            page applications.</li>
          <li>Sound understanding of Node.js for
            server-side development and building
            RESTful APIs.</li>
          <li>Familiarity with Express.js for building
            scalable and efficient web applications.</li>
          <li> Experience with MongoDB for database
            management and integration.</li>
          <li> Knowledge of version control systems
            such as Git for collaborative development.</li>
          <li> Proficient in C, C++, and Python, with
            expertise spanning low-level
            programming, object-oriented design,
            and versatile application development.</li><br />
        </p>
        <h1 className="text-yellow-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <p>
          <h1 className="font-semibold">The Prime Step, Indore</h1>
          <p className="text-sl text-red-600">Web Dev Intern | September 2023 - Present</p>
        </p>
        <p>
          <ul></ul>
          <li>I learned database management concepts and how to efficiently
            store and retrieve data using MongoDB, a NoSQL database.</li>
          <li>I grasped the fundamentals of server-side development using
            Express.js, including routing, middleware implementation, and handling HTTP requests.</li>
          <li>I acquired proficiency in building interactive user interfaces and
            single-page applications (SPAs) with React.js, leveraging its component-based architecture and state management capabilities.</li>
          <li>I delved into server-side JavaScript programming with Node.js,
            learning how to build scalable and efficient web applications and RESTful APIs.</li>
          <li>Structuring web pages using HTML.</li>
          <li>Styling and layout design using CSS.</li>
          <li>Implementing interactive features and dynamic behavior using
            JavaScript.</li><br />
        </p>

        {/* <h1 className="text-yellow-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <ul>
          [Award/Recognition], [Organization/Institution], [Year] [Achievement],
          [Organization/Platform], [Year]
        </ul>
        <br />
        <br />
        <h1 className="text-yellow-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p> */}
      </div>
    </div>
  );
}

export default About;