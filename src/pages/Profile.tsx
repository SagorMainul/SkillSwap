
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileSetup from '@/components/profile/ProfileSetup';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';

const Profile = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  
  useEffect(() => {
    // Check if profile has been set up before
    const profileSetup = localStorage.getItem('profileSetup');
    if (!profileSetup) {
      setIsFirstVisit(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto max-w-5xl">
        {isFirstVisit ? (
          <ProfileSetup onComplete={() => setIsFirstVisit(false)} />
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Avatar className="h-28 w-28 border-2 border-primary">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-3xl">U</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">User Profile</h1>
                    <p className="text-muted-foreground">Member since May 2025</p>
                  </div>
                  <Button className="self-start">Edit Profile</Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                    <span className="font-medium">Teaching:</span> 
                    <span>3 skills</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    <span className="font-medium">Learning:</span> 
                    <span>3 skills</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm">
                    <span className="font-medium">Active Swaps:</span> 
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Tabs defaultValue="about">
                <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Passionate about learning new skills and sharing knowledge with others. 
                        I have experience in web development, photography, and cooking. 
                        I'm currently focused on improving my Spanish language skills and learning to play the guitar.
                      </p>
                      
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-medium mb-2">Location</h3>
                          <p className="text-muted-foreground">San Francisco, CA</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Availability</h3>
                          <p className="text-muted-foreground">Weekday evenings, Weekends</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Preferred Learning</h3>
                          <p className="text-muted-foreground">In-person & Video calls</p>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Languages</h3>
                          <p className="text-muted-foreground">English (Fluent), Spanish (Learning)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="skills" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Skills I'm Teaching</CardTitle>
                        <CardDescription>Skills I can help others learn</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h3 className="font-medium">JavaScript</h3>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Advanced</span>
                            </div>
                            <p className="text-sm mt-1 text-muted-foreground">Front-end development, React, Vue</p>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h3 className="font-medium">Photography</h3>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Intermediate</span>
                            </div>
                            <p className="text-sm mt-1 text-muted-foreground">Portrait, landscape, editing</p>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h3 className="font-medium">Cooking</h3>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Intermediate</span>
                            </div>
                            <p className="text-sm mt-1 text-muted-foreground">Italian cuisine, baking</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Skills I'm Learning</CardTitle>
                        <CardDescription>Skills I want to develop</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h3 className="font-medium">Spanish</h3>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Beginner</span>
                            </div>
                            <p className="text-sm mt-1 text-muted-foreground">Conversation, reading</p>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h3 className="font-medium">Guitar</h3>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Beginner</span>
                            </div>
                            <p className="text-sm mt-1 text-muted-foreground">Acoustic, basics</p>
                          </div>
                          
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h3 className="font-medium">React</h3>
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Intermediate</span>
                            </div>
                            <p className="text-sm mt-1 text-muted-foreground">Hooks, state management</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="history" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Skill Swap History</CardTitle>
                      <CardDescription>Past and present skill exchanges</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="border-b pb-4">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">JavaScript Tutoring</h3>
                              <p className="text-sm text-muted-foreground">Teaching Alex Johnson</p>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded h-fit">Active</span>
                          </div>
                          <p className="text-sm mt-2">Started May 10, 2025 • 3 sessions completed</p>
                        </div>
                        
                        <div className="border-b pb-4">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">Spanish Lessons</h3>
                              <p className="text-sm text-muted-foreground">Learning from Maria Rodriguez</p>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded h-fit">Active</span>
                          </div>
                          <p className="text-sm mt-2">Started April 25, 2025 • 5 sessions completed</p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">Photography Basics</h3>
                              <p className="text-sm text-muted-foreground">Taught Jamie Wright</p>
                            </div>
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded h-fit">Completed</span>
                          </div>
                          <p className="text-sm mt-2">March 15 - April 20, 2025 • 6 sessions completed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
