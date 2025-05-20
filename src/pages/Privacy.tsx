
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-4">
            Last updated: May 20, 2025
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="mb-6">
            At SkillSwap, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you register, express interest in obtaining information about us or our products, or otherwise contact us. The personal information we collect may include:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Home address</li>
            <li>Profile information</li>
            <li>Student ID (for verification purposes)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Usage Data</h3>
          <p>
            We automatically collect certain information when you visit, use, or navigate the platform. This information does not reveal your specific identity but may include:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Device and browser information</li>
            <li>IP address</li>
            <li>Usage patterns</li>
            <li>Referring/exit pages</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including to:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Facilitate account creation and authentication</li>
            <li>Match you with other users based on skills and interests</li>
            <li>Provide and maintain our service</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates and promotional materials</li>
            <li>Improve our platform and user experience</li>
            <li>Protect against fraudulent or unauthorized activity</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
          <p>
            We may share your information in the following situations:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>With other users as part of the skill matching process</li>
            <li>With third-party service providers to help operate our business</li>
            <li>To comply with legal obligations</li>
            <li>With your consent or at your direction</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have various rights regarding your personal information, such as the right to access, correct, or delete your data.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at privacy@skillswap.com.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
