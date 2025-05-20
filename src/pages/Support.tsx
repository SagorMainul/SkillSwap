
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Support</h1>
          <p className="text-gray-600 mb-8">
            Need help with SkillSwap? We're here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
            <p className="text-gray-700 mb-4">
              Find answers to common questions about using SkillSwap, skill matching, and more.
            </p>
            <Link to="/faq" className="text-primary hover:underline">View our FAQ →</Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-700 mb-4">
              Can't find what you're looking for? Our support team is happy to help.
            </p>
            <Link to="/contact" className="text-primary hover:underline">Get in touch →</Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Can We Help?</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">Account Issues</h3>
            <p className="text-gray-700">
              Having trouble with your account, login, or verification? Check our account troubleshooting guide or contact support.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-3">Skill Matching</h3>
            <p className="text-gray-700">
              Need help finding the right skill match? Learn how our matching algorithm works and how to improve your chances of finding the perfect match.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
            <p className="text-gray-700">
              Experiencing technical difficulties with the platform? Our technical team is ready to assist you with any issues.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
