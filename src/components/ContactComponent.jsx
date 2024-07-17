import React, { useState } from 'react';
import appwriteService from '../appwrite/config';
import Logo from '../components/Logo';  // Import the Logo component

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
  
      const { name, email, message } = formData;
  
      if (!name || !email || !message) {
        setError('All fields are required');
        return;
      }
  
      try {
        await appwriteService.submitContact({ ...formData, userId: 'guest' });
        setSuccess('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setError('Failed to send message. Please try again.');
      }
    };
  
    return (
      <div className='flex flex-col items-center min-h-screen dark:bg-gray-900 bg-gray-100 text-black dark:text-white p-4'>
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
          <Logo className="mx-auto mb-6 w-32 h-8" /> {/* Add the Logo component with some margin */}
          <h2 className="text-center text-2xl font-semibold mb-6">Contact Us</h2>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          {success && <div className="text-green-500 text-center mb-4">{success}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
  
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mt-8">
          <div className="flex-1 text-left md:mr-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Address:</strong> 123 Main Street, Anytown, USA
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="mb-2">
              <strong>Email:</strong> contact@yourdomain.com
            </p>
          </div>
  
          <div className="hidden md:flex flex-col items-center mx-4">
            <div className="border-l border-gray-300 dark:border-gray-600 h-full"></div>
          </div>
  
          <Logo className="w-32 h-8 my-4 md:my-0" /> {/* Add the Logo component with some margin */}
        </div>
      </div>
    );
  };
  
  export default Contact;