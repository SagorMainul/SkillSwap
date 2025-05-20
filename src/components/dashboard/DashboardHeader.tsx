
import React from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Settings, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHeader: React.FC = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
    // In a real application, this would handle the actual logout process
  };

  return (
    <header className="bg-background border-b border-border/40 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">SkillSwap</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard/settings">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/dashboard/profile">
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
