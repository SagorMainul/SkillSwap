
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface SkillInputProps {
  title: string;
  description: string;
  onSkillsChange: (skills: string[]) => void;
  initialSkills?: string[];
}

const SkillInput: React.FC<SkillInputProps> = ({
  title,
  description,
  onSkillsChange,
  initialSkills = [],
}) => {
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [inputValue, setInputValue] = useState('');

  const handleAddSkill = () => {
    if (inputValue.trim() !== '' && !skills.includes(inputValue.trim())) {
      const newSkills = [...skills, inputValue.trim()];
      setSkills(newSkills);
      onSkillsChange(newSkills);
      setInputValue('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const newSkills = skills.filter((skill) => skill !== skillToRemove);
    setSkills(newSkills);
    onSkillsChange(newSkills);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-lg font-medium">{title}</Label>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
      </div>
      
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter"
          className="flex-1"
        />
        <Button 
          onClick={handleAddSkill} 
          type="button"
          disabled={inputValue.trim() === ''}
        >
          Add
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2 min-h-[40px]">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="px-3 py-1.5 text-sm">
            {skill}
            <button
              onClick={() => handleRemoveSkill(skill)}
              className="ml-2 hover:text-destructive focus:outline-none"
              aria-label={`Remove ${skill}`}
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillInput;
