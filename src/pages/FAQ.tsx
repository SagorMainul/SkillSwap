
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">
            Find answers to the most common questions about SkillSwap.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">What is SkillSwap?</h3>
            <p className="text-gray-700">
              SkillSwap is a community-driven web platform that connects users who want to learn and teach different skills. By matching people based on the skills they know and the skills they want to learn, SkillSwap enables collaborative, free learning.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">How does skill matching work?</h3>
            <p className="text-gray-700">
              Users input skills they know and skills they want to learn. Our smart matching algorithm suggests suitable partners based on skill, availability, and level. If you don't find a match right away, you can use the "Retry match" button for instant rematch.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Is SkillSwap free to use?</h3>
            <p className="text-gray-700">
              Yes, the core features of SkillSwap are free to use. Students can access additional courses for free upon verifying their student identity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">How do I verify my student status?</h3>
            <p className="text-gray-700">
              To verify your student status, navigate to the Student Verification page and upload your valid student ID. Our team will review it, and once approved, you'll gain access to free course library. Verification is valid for one year.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">How does the Swap Credits system work?</h3>
            <p className="text-gray-700">
              You earn credits by teaching others. These credits can then be spent to request lessons or unlock extra features on the platform.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
