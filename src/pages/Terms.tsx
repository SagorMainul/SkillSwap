
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-4">
            Last updated: May 20, 2025
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            These Terms of Service ("Terms") govern your access to and use of the SkillSwap platform, including any websites, mobile applications, and other services provided by SkillSwap ("Service"). By using SkillSwap, you agree to be bound by these Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Eligibility</h2>
          <p>
            You must be at least 16 years old to use SkillSwap. If you are between 16 and 18 years old, you represent that you have parental consent to use the Service. By using SkillSwap, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and to abide by all of the terms and conditions set forth herein.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
          <p>
            You agree not to use SkillSwap to:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Violate any laws or regulations</li>
            <li>Impersonate any person or entity</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Send spam or other unsolicited messages</li>
            <li>Upload or transmit viruses or other malicious code</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            SkillSwap and its original content, features, and functionality are owned by SkillSwap and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
          <p>
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall SkillSwap, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at terms@skillswap.com.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
