
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/courses" className="text-foreground/80 hover:text-foreground transition-colors">
            Courses
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/login">
            <Button variant="outline" className="mr-2">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button className="gradient-bg text-white">Sign Up</Button>
          </Link>
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
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-32">Log In</Button>
            </Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
              <Button className="gradient-bg text-white w-32">Sign Up</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
