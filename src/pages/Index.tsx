
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-28">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Learn and teach skills in a <span className="gradient-text">community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            SkillSwap connects people who want to exchange knowledge. Teach what you know, learn what you don't - all for free.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="gradient-bg px-8 py-6 text-lg w-full sm:w-auto">Get Started</Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="px-8 py-6 text-lg w-full sm:w-auto">How It Works</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How SkillSwap Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 flex items-center justify-center rounded-full gradient-bg text-white mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Add Your Skills</h3>
              <p className="text-gray-600">
                Tell us what skills you can teach and what you want to learn from others.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 flex items-center justify-center rounded-full gradient-bg text-white mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
              <p className="text-gray-600">
                Our algorithm finds people who match your learning needs and can benefit from your skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 flex items-center justify-center rounded-full gradient-bg text-white mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Learning</h3>
              <p className="text-gray-600">
                Connect through our platform and schedule sessions to exchange knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Student Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-skillswap-purple/10 to-skillswap-blue/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Are you a student?
                </h2>
                <p className="text-gray-600 mb-4">
                  Verify your student status and get access to our premium courses for free.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Access to expert-created course library</li>
                  <li>Structured learning paths for popular skills</li>
                  <li>Certificates of completion for your portfolio</li>
                </ul>
              </div>
              <div>
                <Link to="/verify-student">
                  <Button className="gradient-bg w-full md:w-auto">
                    Verify Student Status
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Community Says
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-skillswap-purple/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-skillswap-purple font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold">Michael K.</h4>
                  <p className="text-sm text-gray-500">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I taught JavaScript to someone who taught me photography. This exchange broadened my horizons while helping me share my expertise. Win-win!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-skillswap-blue/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-skillswap-blue font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah T.</h4>
                  <p className="text-sm text-gray-500">Graphic Designer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a student, I love having access to free courses. I've learned Adobe Illustrator through the platform and now I'm teaching others basic design principles."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-skillswap-purple/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-skillswap-purple font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold">James L.</h4>
                  <p className="text-sm text-gray-500">Music Teacher</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I've been teaching piano to three different people and learning Spanish in return. The system makes it easy to schedule sessions and track progress."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of others exchanging skills and building connections.
          </p>
          <Link to="/signup">
            <Button className="gradient-bg px-8 py-6 text-lg">
              Join SkillSwap Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
