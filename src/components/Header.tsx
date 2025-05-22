import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if the current route is the homepage
  const isHomePage = location.pathname === '/';

  // Check if user is logged in (example using session storage)
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

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
    <header className="bg-background border-b border-border/40 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="text-lg font-bold">
          SkillSwap
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/courses" className="hover:text-primary transition-colors">
            Courses
          </Link>
          <Link to="/how-it-works" className="hover:text-primary transition-colors">
            How it works
          </Link>
          <Link to="/faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link to="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link to="/support" className="hover:text-primary transition-colors">
            Support
          </Link>
          {isLoggedIn && (
            <Link to="/leaderboard" className="hover:text-primary transition-colors">
              Leaderboard
            </Link>
          )}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link to="/profile" state={{ isLoggedIn: true }}>
                <Button variant="secondary">Profile</Button>
              </Link>
              <Link to="/dashboard" state={{ isLoggedIn: true }}>
                <Button>Dashboard</Button>
              </Link>
              <Button variant="outline" onClick={handleLogout}>Log Out</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:w-2/3 md:w-1/2 lg:w-1/3">
            <SheetHeader className="space-y-2">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Explore SkillSwap and manage your account.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link to="/about" className="hover:text-primary transition-colors block py-2">
                About
              </Link>
              <Link to="/courses" className="hover:text-primary transition-colors block py-2">
                Courses
              </Link>
              <Link to="/how-it-works" className="hover:text-primary transition-colors block py-2">
                How it works
              </Link>
              <Link to="/faq" className="hover:text-primary transition-colors block py-2">
                FAQ
              </Link>
              <Link to="/blog" className="hover:text-primary transition-colors block py-2">
                Blog
              </Link>
              <Link to="/support" className="hover:text-primary transition-colors block py-2">
                Support
              </Link>
              {isLoggedIn && (
                <Link to="/leaderboard" className="hover:text-primary transition-colors block py-2">
                  Leaderboard
                </Link>
              )}
              
              {isLoggedIn ? (
                <>
                  <Link to="/profile" state={{ isLoggedIn: true }} className="block py-2">
                    <Button variant="secondary" className="w-full">Profile</Button>
                  </Link>
                  <Link to="/dashboard" state={{ isLoggedIn: true }} className="block py-2">
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                  <Button variant="outline" onClick={handleLogout} className="w-full">Log Out</Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block py-2">
                    <Button variant="outline" className="w-full">Log In</Button>
                  </Link>
                  <Link to="/signup" className="block py-2">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
