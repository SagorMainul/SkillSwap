
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MatchCardProps {
  name: string;
  avatar?: string;
  skill: string;
  level: string;
  bio: string;
  onConnect: () => void;
  onSkip: () => void;
}

const MatchCard: React.FC<MatchCardProps> = ({
  name,
  avatar,
  skill,
  level,
  bio,
  onConnect,
  onSkip
}) => {
  return (
    <Card className="w-full shadow-md transition-all hover-scale">
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Badge className="mr-2 gradient-bg text-white">{skill}</Badge>
              <span className="text-xs">{level} level</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={onSkip}
          className="w-1/2 mr-2"
        >
          Skip
        </Button>
        <Button 
          onClick={onConnect}
          className="w-1/2 gradient-bg"
        >
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MatchCard;
