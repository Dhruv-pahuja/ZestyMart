import React from 'react';

const AboutComponent = () => {
  return (
    <div className="container mx-auto p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">About ZestyMart</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">ZestyMart</h2>
        <p className="text-lg">
          Welcome to ZestyMart, your go-to destination for all things e-commerce! At ZestyMart, we are dedicated to providing you with the best online shopping experience. Whether you’re looking for the latest gadgets, stylish fashion, or home essentials, ZestyMart has you covered.
        </p>
        <p className="text-lg mt-2">
          Our mission is to offer a seamless and enjoyable shopping experience with a wide range of high-quality products. We strive to ensure that our customers have access to the latest trends and best deals, all in one convenient place.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">About the Developer</h2>
        <p className="text-lg">
          This website was developed by <a href="https://github.com/Dhruv-pahuja" target='blank' className='text-blue-500 underline'>Dhruv Pahuja</a>. As a passionate developer with a love for creating innovative web applications, I took great care in building ZestyMart to ensure it meets the highest standards of functionality and user experience.
        </p>
        <p className="text-lg mt-2">
          With expertise in modern web technologies and a dedication to continuous improvement, I am committed to delivering exceptional digital solutions that meet the needs of users and businesses alike.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
        <ul className="list-disc list-inside text-lg">
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
    </div>
  );
};

export default AboutComponent;
