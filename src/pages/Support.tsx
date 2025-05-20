
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Mail, Book } from 'lucide-react';

const Support = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Support Center</h1>
          <p className="text-gray-600">
            Need help with SkillSwap? We're here to assist you with any questions or issues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Live Chat
              </CardTitle>
              <CardDescription>Talk with our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Get real-time assistance with our support team Monday-Friday, 9am-6pm EST.</p>
              <Button className="w-full gradient-bg">Start Chat</Button>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </CardTitle>
              <CardDescription>Send us a message</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Email our support team at support@skillswap.com for non-urgent inquiries.</p>
              <Button className="w-full gradient-bg">Send Email</Button>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="mr-2 h-5 w-5" />
                Knowledge Base
              </CardTitle>
              <CardDescription>Find answers yourself</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Browse our comprehensive guides and tutorials to find quick answers.</p>
              <Button className="w-full gradient-bg">Browse Articles</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-1">How do I reset my password?</h3>
              <p className="text-gray-600">Visit the login page and click on "Forgot Password". Follow the instructions sent to your email to reset your password.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">How is my student status verified?</h3>
              <p className="text-gray-600">Upload your valid student ID through the verification page. Our team will manually review it within 1-2 business days.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1">What if I can't find a skill match?</h3>
              <p className="text-gray-600">Try broadening your skill interests or checking back later as new users join. You can also join our community forums to find potential matches.</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/faq">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
