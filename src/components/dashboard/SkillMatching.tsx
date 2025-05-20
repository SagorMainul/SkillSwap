
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import MatchCard from './MatchCard';

// Mock data
const MOCK_MATCHES = [
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
  }
];

const SkillMatching: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState(MOCK_MATCHES);
  const { toast } = useToast();

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

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would fetch actual matches from the backend
      setIsLoading(false);
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
    
    // Simulate API call to get new matches
    setTimeout(() => {
      setMatches(MOCK_MATCHES);
      setIsLoading(false);
    }, 1000);
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
                <SelectItem value="programming">Programming</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="music">Music</SelectItem>
                <SelectItem value="language">Language</SelectItem>
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
    </div>
  );
};

export default SkillMatching;
