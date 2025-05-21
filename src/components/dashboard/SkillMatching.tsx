
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import MatchCard from './MatchCard';

// Create a messaging modal component
import MessageModal from './MessageModal';

// Mock data for all potential matches
const ALL_MATCHES = [
  {
    id: 1,
    name: 'Alex Johnson',
    avatar: '',
    skill: 'Photography',
    level: 'Intermediate',
    bio: 'Professional photographer with 5 years of experience. I can teach you the basics of composition and lighting.',
  },
  {
    id: 2,
    name: 'Sam Roberts',
    avatar: '',
    skill: 'JavaScript',
    level: 'Advanced',
    bio: 'Frontend developer working with React and Vue. Happy to help beginners get started with web development.',
  },
  {
    id: 3,
    name: 'Jamie Wright',
    avatar: '',
    skill: 'Guitar',
    level: 'Intermediate',
    bio: 'Playing guitar for 10 years. Can teach acoustic or electric guitar, focusing on rock and blues styles.',
  },
  {
    id: 4,
    name: 'Maria Garcia',
    avatar: '',
    skill: 'Spanish',
    level: 'Advanced',
    bio: 'Native Spanish speaker with teaching experience. Can help with conversation practice and grammar.',
  },
  {
    id: 5,
    name: 'David Chen',
    avatar: '',
    skill: 'Cooking',
    level: 'Advanced',
    bio: 'Culinary school graduate specializing in Asian fusion cuisine. Can teach basic to advanced techniques.',
  },
  {
    id: 6,
    name: 'Sarah Williams',
    avatar: '',
    skill: 'Design',
    level: 'Intermediate',
    bio: 'Graphic designer with focus on UI/UX. Can teach Figma, Adobe XD and design principles.',
  },
  {
    id: 7,
    name: 'Michael Taylor',
    avatar: '',
    skill: 'Music',
    level: 'Beginner',
    bio: 'Music theory enthusiast learning piano. Can help with understanding basic music notation and rhythm.',
  }
];

const SkillMatching: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState(ALL_MATCHES.slice(0, 3)); // Default to first 3 matches
  const { toast } = useToast();
  
  // State for the messaging modal
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ id: number; name: string } | null>(null);

  const handleFindMatches = () => {
    if (!selectedSkill) {
      toast({
        title: "Select a skill",
        description: "Please select a skill you want to learn.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    // Simulate API call with actual filtering based on skill
    setTimeout(() => {
      // Filter matches based on selected skill
      const filteredMatches = ALL_MATCHES.filter(match => 
        match.skill.toLowerCase() === selectedSkill.toLowerCase() ||
        selectedSkill === 'all'
      );
      
      setMatches(filteredMatches.length > 0 ? filteredMatches : []);
      setIsLoading(false);
      
      toast({
        title: "Matches found",
        description: `Found ${filteredMatches.length} matches for ${selectedSkill}.`,
      });
    }, 1000);
  };

  const handleConnect = (id: number) => {
    toast({
      title: "Connection request sent",
      description: `You've sent a connection request to ${matches.find(m => m.id === id)?.name}.`,
    });
    
    // Remove this match from the list
    setMatches(matches.filter(match => match.id !== id));
  };

  const handleSkip = (id: number) => {
    // Remove this match from the list
    setMatches(matches.filter(match => match.id !== id));
  };

  const handleRetryMatch = () => {
    setIsLoading(true);
    
    // Simulate API call to get new matches - reset to initial state
    setTimeout(() => {
      setMatches(ALL_MATCHES.slice(0, 3));
      setIsLoading(false);
      setSelectedSkill('');
    }, 1000);
  };
  
  const handleOpenMessage = (id: number) => {
    const user = ALL_MATCHES.find(m => m.id === id);
    if (user) {
      setSelectedUser({ id: user.id, name: user.name });
      setIsMessageModalOpen(true);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find Skill Matches</CardTitle>
          <CardDescription>
            Choose a skill you want to learn and we'll find people who can teach you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Select a skill" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="guitar">Guitar</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="photography">Photography</SelectItem>
                <SelectItem value="cooking">Cooking</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              onClick={handleFindMatches} 
              className="gradient-bg"
              disabled={isLoading}
            >
              {isLoading ? 'Finding matches...' : 'Find Matches'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Matches</h2>
          {matches.length === 0 && (
            <Button 
              onClick={handleRetryMatch}
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? 'Finding new matches...' : 'Find New Matches'}
            </Button>
          )}
        </div>

        {matches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matches.map(match => (
              <MatchCard
                key={match.id}
                name={match.name}
                avatar={match.avatar}
                skill={match.skill}
                level={match.level}
                bio={match.bio}
                onConnect={() => handleConnect(match.id)}
                onSkip={() => handleSkip(match.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed rounded-lg">
            <p className="text-muted-foreground mb-4">No matches found for now.</p>
            <p className="text-sm text-gray-500">Try selecting a different skill or check back later.</p>
          </div>
        )}
      </div>
      
      {/* Active Swaps Card */}
      <Card>
        <CardHeader>
          <CardTitle>Active Swaps</CardTitle>
          <CardDescription>
            Your current active skill swap sessions
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
                onClick={() => handleOpenMessage(1)}
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
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full mt-2"
                onClick={() => handleOpenMessage(3)}
              >
                Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

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

export default SkillMatching;
