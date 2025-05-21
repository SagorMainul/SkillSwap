
import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: number;
  senderId: number | string;
  text: string;
  timestamp: Date;
}

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userId: number;
}

const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose, userName, userId }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Load initial messages - in a real app, this would come from an API
  useEffect(() => {
    // Only show previous conversation history, no initial message from the other user
    const initialMessages: Message[] = [];
    
    setMessages(initialMessages);
  }, [userId, userName]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      senderId: 'user',
      text: newMessage,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    
    // Simulate response after a short delay, only if this is not the first message or if there are already messages
    setTimeout(() => {
      const responseMessage: Message = {
        id: messages.length + 2,
        senderId: userId,
        text: getRandomResponse(),
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, responseMessage]);
      
      toast({
        title: "New message",
        description: `${userName} has sent you a message`,
      });
    }, 1000);
  };

  const getRandomResponse = () => {
    const responses = [
      "That sounds great! When would you like to schedule our next session?",
      "I can definitely help you with that. Let me prepare some materials for our next meeting.",
      "Good question! Let me explain that concept in more detail.",
      "I'm available this weekend if you'd like to practice more.",
      "Have you tried the exercise we discussed last time?",
      "Let's set up a time to go through your questions in detail.",
      "I've prepared some additional resources that might help you with this topic.",
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{userName}</span>
          </DialogTitle>
          <DialogDescription>
            Send and receive messages about your skill swap
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 h-[50vh] pr-4" ref={scrollAreaRef}>
          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex ${message.senderId === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.senderId === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs ${
                    message.senderId === 'user' 
                      ? 'text-primary-foreground/80' 
                      : 'text-gray-500'
                  } text-right mt-1`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <form onSubmit={handleSendMessage} className="flex flex-col gap-2 mt-4">
          <Textarea
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="min-h-[80px] resize-none"
          />
          <Button type="submit" className="self-end">Send</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;
