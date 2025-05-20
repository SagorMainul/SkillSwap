
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">How SkillSwap Works</h1>
            <p className="text-xl text-gray-600 mb-8">
              Our platform makes it easy to exchange skills and knowledge with others.
              Here's how to get started.
            </p>
          </div>
        </section>
        
        {/* Steps Section */}
        <section className="container mx-auto mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary/30 transform -translate-x-1/2" />
              
              {/* Step 1 */}
              <div className="mb-12 md:mb-24 relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Create Your Profile</h3>
                  <p className="text-gray-600">
                    Sign up and build your profile by adding your bio and profile picture.
                    List the skills you already have and the ones you want to learn.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-4 md:left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="ml-12 md:ml-0 p-6 bg-white rounded-lg shadow-lg">
                    <img 
                      src="https://placehold.co/600x400/e2e8f0/1e293b?text=Profile+Setup" 
                      alt="Profile Setup" 
                      className="w-full rounded"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="mb-12 md:mb-24 relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="absolute left-4 md:left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 md:translate-x-1/2 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="ml-12 md:ml-0 p-6 bg-white rounded-lg shadow-lg">
                    <img 
                      src="https://placehold.co/600x400/e2e8f0/1e293b?text=Skill+Matching" 
                      alt="Skill Matching" 
                      className="w-full rounded"
                    />
                  </div>
                </div>
                <div className="md:pl-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Find Your Matches</h3>
                  <p className="text-gray-600">
                    Our smart algorithm suggests potential skill exchange partners based on what
                    you know and what you want to learn. Browse matches and find people with complementary skills.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="mb-12 md:mb-24 relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Connect & Chat</h3>
                  <p className="text-gray-600">
                    Send messages to your matches and arrange your skill exchange. 
                    Use our built-in tools to schedule sessions and share resources.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-4 md:left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="ml-12 md:ml-0 p-6 bg-white rounded-lg shadow-lg">
                    <img 
                      src="https://placehold.co/600x400/e2e8f0/1e293b?text=Chat+Interface" 
                      alt="Chat Interface" 
                      className="w-full rounded"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="mb-12 md:mb-24 relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <div className="absolute left-4 md:left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 md:translate-x-1/2 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="ml-12 md:ml-0 p-6 bg-white rounded-lg shadow-lg">
                    <img 
                      src="https://placehold.co/600x400/e2e8f0/1e293b?text=Exchange+Skills" 
                      alt="Exchange Skills" 
                      className="w-full rounded"
                    />
                  </div>
                </div>
                <div className="md:pl-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Teach & Learn</h3>
                  <p className="text-gray-600">
                    Share your expertise with others and learn new skills in return.
                    The more you teach, the more credits you earn to request lessons from others.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Grow & Earn Recognition</h3>
                  <p className="text-gray-600">
                    As you teach and learn more, you'll earn XP, badges, and rise up our leaderboards.
                    Build your portfolio to showcase your skills and achievements.
                  </p>
                </div>
                <div className="relative order-1 md:order-2">
                  <div className="absolute left-4 md:left-0 top-0 w-8 h-8 bg-primary rounded-full transform -translate-x-1/2 flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div className="ml-12 md:ml-0 p-6 bg-white rounded-lg shadow-lg">
                    <img 
                      src="https://placehold.co/600x400/e2e8f0/1e293b?text=Achievements" 
                      alt="Achievements" 
                      className="w-full rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Features */}
        <section className="container mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Free Courses</h3>
              <p className="text-gray-600 mb-4">
                Access our library of free courses created by the community and experts.
                Student verification gives you full access to premium content.
              </p>
              <Link to="/courses" className="text-primary hover:underline">Browse courses →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Skill Roadmaps</h3>
              <p className="text-gray-600 mb-4">
                Not sure what to learn next? Our roadmap generator creates personalized
                learning paths based on your goals.
              </p>
              <Link to="/roadmaps" className="text-primary hover:underline">Explore roadmaps →</Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Portfolio Builder</h3>
              <p className="text-gray-600 mb-4">
                Showcase your work, get peer reviews, and build a comprehensive
                portfolio of your skills and achievements.
              </p>
              <Link to="/portfolio" className="text-primary hover:underline">Learn more →</Link>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Is SkillSwap really free?</h3>
              <p className="text-gray-600">
                Yes! SkillSwap operates on a credit system where you earn credits by teaching
                others, which you can then spend on learning new skills. The platform itself is free to use.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">How do I verify as a student?</h3>
              <p className="text-gray-600">
                Students can upload their student ID or enrollment verification through our secure
                student verification page. Once approved, you'll have access to all premium courses for free.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">How are matches made?</h3>
              <p className="text-gray-600">
                Our matching algorithm considers the skills you know, the skills you want to learn,
                your availability, and your skill level to suggest the most compatible exchanges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">What if I don't like my match?</h3>
              <p className="text-gray-600">
                You can simply click the "Retry Match" button to find new potential skill exchange partners.
                There's no obligation to continue with any match you're not comfortable with.
              </p>
            </div>
          </div>
        </section>
        
        {/* Join CTA */}
        <section className="bg-gradient-to-r from-skillswap-purple to-skillswap-blue py-12 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Swapping Skills?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community today and start exchanging knowledge with people around the world.
            </p>
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="bg-white text-skillswap-purple hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
