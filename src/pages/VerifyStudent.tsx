
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const VerifyStudent = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This would normally connect to a backend API
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Verification submitted",
        description: "We've received your student ID. We'll review it and get back to you within 2 business days.",
      });
      setFile(null);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Student Verification</h1>
          <p className="text-gray-600">
            Verify your student status to get access to our free course library.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Student ID</CardTitle>
            <CardDescription>
              Please upload a clear image of your current student ID card. We accept university, college, and high school IDs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="student-id">Student ID Image</Label>
                <Input 
                  id="student-id" 
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                <p className="text-xs text-gray-500">
                  Accepted formats: JPG, PNG, PDF. Maximum size: 5MB.
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="institution">Educational Institution</Label>
                <Input 
                  id="institution" 
                  placeholder="Enter your school/university name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="graduation-date">Expected Graduation Date</Label>
                <Input 
                  id="graduation-date" 
                  type="month"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full gradient-bg"
                disabled={!file || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit for Verification"}
              </Button>
            </form>
            
            <div className="mt-8 border-t pt-6">
              <h3 className="font-semibold mb-2">Verification Process</h3>
              <ol className="list-decimal ml-5 space-y-2 text-gray-700">
                <li>Upload your valid student ID</li>
                <li>Our team will review your submission (1-2 business days)</li>
                <li>You'll receive an email with the verification result</li>
                <li>Once approved, you'll have full access to all courses</li>
              </ol>
              <p className="mt-4 text-sm text-gray-600">
                Note: Student verification is valid for one year, after which you'll need to re-verify your student status.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default VerifyStudent;
