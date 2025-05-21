
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { User, LogOut, Bell } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarTrigger } from '@/components/ui/sidebar';

const DashboardHeader: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login state from session storage
    sessionStorage.removeItem('isLoggedIn');
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
    
    // Redirect to the homepage after logout
    navigate('/');
  };

  return (
    <header className="bg-background border-b border-border/40 py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <SidebarTrigger className="mr-4 md:hidden" />
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile" state={{ isLoggedIn: true }}>
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
