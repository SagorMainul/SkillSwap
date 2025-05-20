
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About SkillSwap</h1>
            <p className="text-xl text-gray-600 mb-8">
              We're on a mission to make learning accessible to everyone through
              collaborative skill exchange.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="container mx-auto mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-4">
                SkillSwap started with a simple idea: everyone has something to teach and something to learn. 
                We believe that knowledge should be accessible to all, regardless of financial means.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2024, our platform connects people who want to exchange skills, creating a 
                community of lifelong learners supporting each other's growth.
              </p>
              <p className="text-gray-600">
                What began as a small community project has grown into a global platform facilitating thousands 
                of skill exchanges every day, from programming and languages to cooking and photography.
              </p>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="container mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How SkillSwap Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Share Your Skills</h3>
              <p className="text-gray-600">
                Create a profile listing skills you can teach and skills you want to learn.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Match & Connect</h3>
              <p className="text-gray-600">
                Our algorithm matches you with compatible skill exchange partners.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Learn & Teach</h3>
              <p className="text-gray-600">
                Schedule sessions to exchange knowledge and grow together.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="container mx-auto mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-600">We believe in making education accessible to everyone, regardless of financial situation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community</h3>
                  <p className="text-gray-600">We foster a supportive community where everyone helps each other grow.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trust & Safety</h3>
                  <p className="text-gray-600">We prioritize creating a safe environment where users can exchange knowledge with confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="bg-gradient-to-r from-skillswap-purple to-skillswap-blue py-12 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your journey of learning and teaching with thousands of other curious minds around the world.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="bg-white text-skillswap-purple hover:bg-gray-100">
                  Sign Up for Free
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
