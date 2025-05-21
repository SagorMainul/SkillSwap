
import React, { useState, useEffect } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import SkillMatching from '@/components/dashboard/SkillMatching';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MessageModal from '@/components/dashboard/MessageModal';

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
            
            <SkillMatching />
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
