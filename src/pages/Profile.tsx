
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileSetup from '@/components/profile/ProfileSetup';

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <ProfileSetup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
