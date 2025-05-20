
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CommunityGuidelines = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Community Guidelines</h1>
          <p className="text-gray-600 mb-4">
            Our community values and standards for a positive learning environment.
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="mb-6">
            At SkillSwap, we believe in creating a supportive, inclusive, and respectful environment where users can learn from each other and grow together. These guidelines help ensure that our community remains a positive space for everyone.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Be Respectful</h2>
          <p>
            Treat all community members with kindness and respect. We celebrate diversity and welcome people of all backgrounds, identities, and skill levels. Discriminatory language or behavior based on race, gender, sexual orientation, religion, disability, or any other personal characteristic is not tolerated.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Foster Constructive Learning</h2>
          <p>
            SkillSwap is about mutual growth and learning. When teaching, be patient and supportive. When learning, be open to feedback. Remember that everyone has different learning styles and paces.
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Provide constructive feedback, not criticism</li>
            <li>Be patient with those who are learning</li>
            <li>Acknowledge and celebrate progress</li>
            <li>Share knowledge generously</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Be Honest and Authentic</h2>
          <p>
            Be truthful about your skill levels and experience. Misrepresenting your abilities undermines trust in the community and can lead to inappropriate skill matches.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Maintain Privacy and Confidentiality</h2>
          <p>
            Respect others' privacy. Do not share personal information about other users without their explicit consent. Be mindful about the personal information you share about yourself as well.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Keep Communication Appropriate</h2>
          <p>
            All communication should be appropriate and focused on learning. Harassment, intimidation, or any form of unwelcome behavior is strictly prohibited. This includes:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Offensive language or imagery</li>
            <li>Personal attacks or trolling</li>
            <li>Unwelcome advances of any kind</li>
            <li>Spam or promotional content</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Honor Your Commitments</h2>
          <p>
            When you agree to a skill swap, do your best to follow through. If circumstances change, communicate promptly and respectfully with your learning partner.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Report Concerns</h2>
          <p>
            If you encounter behavior that violates these guidelines, please report it. We take all reports seriously and will investigate promptly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Follow the Rules</h2>
          <p>
            Violation of these guidelines may result in warnings, temporary suspension, or permanent removal from the platform, depending on the severity and frequency of the violation.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Remember</h3>
          <p>
            SkillSwap is a community built on mutual respect and a shared love of learning. By following these guidelines, you help create a positive environment where everyone can grow and thrive.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityGuidelines;
