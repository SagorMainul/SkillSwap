
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get isLoggedIn from sessionStorage to persist login state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('isLoggedIn') === 'true' || location.pathname === '/dashboard';
  });

  // Update sessionStorage when login state changes
  useEffect(() => {
    if (location.pathname === '/dashboard') {
      sessionStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    // Clear login state
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
    
    // Redirect to the homepage after logout
    navigate('/');
  };

  return (
    <header className="fixed w-full z-10 bg-background border-b border-border/40 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">SkillSwap</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </Link>
          <Link 
            to="/courses" 
            state={{ isLoggedIn }}
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Courses
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" state={{ isLoggedIn }}>
                <Button variant="outline" className="mr-2">Dashboard</Button>
              </Link>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="mr-2">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button className="gradient-bg text-white">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-background z-20 animate-fade-in">
          <nav className="flex flex-col items-center space-y-6 py-8">
            <Link 
              to="/how-it-works" 
              className="text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/courses" 
              state={{ isLoggedIn }}
              className="text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="text-foreground/80 hover:text-foreground transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  to="/dashboard" 
                  state={{ isLoggedIn }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="outline" className="w-32">Dashboard</Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-32"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-32">Log In</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="gradient-bg text-white w-32">Sign Up</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
