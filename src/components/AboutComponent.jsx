import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">About ZestyMart</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">About ZestyMart</h2>
        <p className="text-lg leading-relaxed mb-4">
          ZestyMart is a web development project designed to showcase my skills in building modern, responsive, and user-friendly web applications. This project demonstrates my ability to create a full-featured e-commerce platform from scratch, utilizing the latest technologies and best practices in the industry.
        </p>
        <p className="text-lg leading-relaxed">
          My goal with ZestyMart was to create a seamless and enjoyable shopping experience, highlighting my expertise in frontend and backend development, as well as my commitment to delivering high-quality digital solutions. This project is a testament to my dedication to continuous learning and improvement in the field of web development.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">About the Developer</h2>
        <p className="text-lg leading-relaxed mb-4">
          This website was developed by <a href="https://github.com/Dhruv-pahuja" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>Dhruv Pahuja</a>. As a passionate developer with a love for creating innovative web applications, I took great care in building ZestyMart to ensure it meets the highest standards of functionality and user experience.
        </p>
        <p className="text-lg leading-relaxed">
          With expertise in modern web technologies and a dedication to continuous improvement, I am committed to delivering exceptional digital solutions that meet the needs of users and businesses alike.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">Technologies Used</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
          <li><strong>Redux:</strong> A state management library for JavaScript apps.</li>
          <li><strong>React Router:</strong> A library for handling routing in React applications.</li>
          <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for creating custom designs.</li>
          <li><strong>Node.js:</strong> JavaScript runtime built on Chrome's V8 JavaScript engine.</li>
          <li><strong>Express:</strong> A web application framework for Node.js.</li>
          <li><strong>MongoDB:</strong> A NoSQL database used for storing data.</li>
          <li><strong>Appwrite:</strong> An open-source backend server that provides a set of APIs for user authentication, databases, and file storage.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-2">Source Code</h2>
        <p className="text-lg leading-relaxed">
          The source code of this project is available at my <a href="https://github.com/Dhruv-pahuja/ZestyMart" target="_blank" rel="noopener noreferrer" className='underline text-blue-500'>Github Repository</a>.
        </p>
      </section>

      <footer className="mt-8 border-t-2 border-gray-300 dark:border-gray-700 pt-4 text-center">
        <p className="text-lg">
          © 2024 Dhruv Pahuja. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
