
import React, { useState, useEffect } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import SkillMatching from '@/components/dashboard/SkillMatching';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MessageModal from '@/components/dashboard/MessageModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample enrolled courses data
const enrolledCourses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the fundamentals of React",
    progress: 45,
    instructor: "Alex Johnson",
    duration: "4 hours"
  },
  {
    id: 2,
    title: "Spanish Conversation Basics",
    description: "Master everyday Spanish phrases",
    progress: 20,
    instructor: "Maria Rodriguez",
    duration: "2.5 hours"
  },
  {
    id: 3, 
    title: "Guitar Fundamentals",
    description: "Learn to play guitar from scratch",
    progress: 60,
    instructor: "James Peterson",
    duration: "3 hours"
  }
];

const Dashboard = () => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ id: number; name: string } | null>(null);
  
  const handleOpenMessage = (id: number, name: string) => {
    setSelectedUser({ id, name });
    setIsMessageModalOpen(true);
  };
  
  // Handle opening message modal from notification
  useEffect(() => {
    const handleMessageNotification = () => {
      const params = new URLSearchParams(window.location.search);
      const msgId = params.get('msgId');
      const userName = params.get('userName');
      
      if (msgId && userName) {
        setSelectedUser({ id: parseInt(msgId), name: userName });
        setIsMessageModalOpen(true);
        
        // Clean up the URL
        window.history.replaceState({}, document.title, "/dashboard");
      }
    };
    
    handleMessageNotification();
  }, []);
  
  // Store login state
  React.useEffect(() => {
    sessionStorage.setItem('isLoggedIn', 'true');
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      
      <main className="flex-1 p-4 container mx-auto max-w-7xl mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl">Welcome back, User!</CardTitle>
                <CardDescription>
                  Continue your learning journey or find new skills to master.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="hover-scale">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Your Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">JavaScript</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Photography</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Cooking</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="hover-scale">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm">Spanish</span>
                        <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm">Guitar</span>
                        <span className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm">React</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="matching">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="matching">Skill Matching</TabsTrigger>
                <TabsTrigger value="myCourses">My Courses</TabsTrigger>
              </TabsList>
              
              <TabsContent value="matching" className="mt-0">
                <SkillMatching />
              </TabsContent>
              
              <TabsContent value="myCourses" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>My Enrolled Courses</CardTitle>
                    <CardDescription>
                      Continue learning where you left off
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="border rounded-lg p-4">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{course.title}</h3>
                              <p className="text-sm text-muted-foreground">{course.description}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs text-muted-foreground">Instructor: {course.instructor}</span>
                                <span className="text-xs text-muted-foreground">•</span>
                                <span className="text-xs text-muted-foreground">{course.duration}</span>
                              </div>
                            </div>
                            <Link to={`/courses/${course.id}`} state={{ isLoggedIn: true }}>
                              <Button size="sm">Continue</Button>
                            </Link>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="mt-3">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full">
                              <div 
                                className="h-full bg-primary rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6">
                      <Link to="/courses" state={{ isLoggedIn: true }}>
                        <Button variant="outline" className="w-full">Explore More Courses</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Swaps</CardTitle>
                <CardDescription>
                  Manage your active skill swaps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">JavaScript Basics</h4>
                        <p className="text-xs text-gray-500">with Alex Johnson</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full mt-2"
                      onClick={() => handleOpenMessage(1, "Alex Johnson")}
                    >
                      Message
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Photography Tips</h4>
                        <p className="text-xs text-gray-500">with Jamie Wright</p>
                      </div>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full mt-2"
                      onClick={() => handleOpenMessage(3, "Jamie Wright")}
                    >
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recommended Courses</CardTitle>
                <CardDescription>
                  Free courses that match your interests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="group cursor-pointer">
                    <h4 className="font-medium group-hover:text-primary transition-colors">React for Beginners</h4>
                    <p className="text-sm text-gray-500">12 lessons • 4 hours</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <h4 className="font-medium group-hover:text-primary transition-colors">Spanish Conversation Basics</h4>
                    <p className="text-sm text-gray-500">8 lessons • 2.5 hours</p>
                  </div>
                  
                  <div className="group cursor-pointer">
                    <h4 className="font-medium group-hover:text-primary transition-colors">Guitar Fundamentals</h4>
                    <p className="text-sm text-gray-500">10 lessons • 3 hours</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Link to="/courses" state={{ isLoggedIn: true }}>
                    <Button variant="outline" className="w-full">Browse All Courses</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      {/* Message Modal */}
      {isMessageModalOpen && selectedUser && (
        <MessageModal
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
          userName={selectedUser.name}
          userId={selectedUser.id}
        />
      )}
    </div>
  );
};

export default Dashboard;
