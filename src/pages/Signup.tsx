
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/auth/SignupForm';

const Signup = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-4 pt-24 pb-16">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
