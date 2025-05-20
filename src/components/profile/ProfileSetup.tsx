
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SkillInput from './SkillInput';

const ProfileSetup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [skillsKnown, setSkillsKnown] = useState<string[]>([]);
  const [skillsToLearn, setSkillsToLearn] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleContinue = () => {
    if (step === 1) {
      if (!username.trim()) {
        toast({
          title: "Username required",
          description: "Please enter a username to continue.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (skillsKnown.length === 0 || skillsToLearn.length === 0) {
      toast({
        title: "Skills required",
        description: "Please add at least one skill you know and one skill you want to learn.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profile created",
        description: "Your profile has been set up successfully!",
      });
      setIsLoading(false);
      // In a real app, this would redirect to the dashboard
    }, 1500);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Set up your profile</CardTitle>
        <CardDescription className="text-center">
          Tell us about yourself and your skills to get matched with the right people
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Choose a username</Label>
              <Input
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us a bit about yourself..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="min-h-[120px]"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <SkillInput
            title="What skills do you have?"
            description="Add skills you can teach others. These can be technical skills, creative skills, or any knowledge you'd like to share."
            onSkillsChange={setSkillsKnown}
            initialSkills={skillsKnown}
          />
        )}

        {step === 3 && (
          <SkillInput
            title="What skills do you want to learn?"
            description="Add skills you're interested in learning from others in the community."
            onSkillsChange={setSkillsToLearn}
            initialSkills={skillsToLearn}
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button
            variant="outline"
            onClick={handleBack}
          >
            Back
          </Button>
        ) : (
          <div></div> // Empty div to maintain flex spacing
        )}
        
        <Button 
          onClick={handleContinue} 
          className="gradient-bg"
          disabled={isLoading}
        >
          {isLoading
            ? 'Creating profile...'
            : step < 3
              ? 'Continue'
              : 'Complete Profile'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileSetup;
