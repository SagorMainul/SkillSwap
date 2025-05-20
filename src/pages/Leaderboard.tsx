
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Leaderboard = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Sample leaderboard data - in a real app, this would come from an API
  const leaderboardData = {
    teaching: [
      { id: 1, name: "Alex Johnson", points: 2340, avatar: "AJ", skills: ["JavaScript", "React", "Node.js"] },
      { id: 2, name: "Maria Garcia", points: 2105, avatar: "MG", skills: ["Spanish", "French", "ESL"] },
      { id: 3, name: "David Kim", points: 1980, avatar: "DK", skills: ["Photography", "Photoshop", "Lightroom"] },
      { id: 4, name: "Sarah Williams", points: 1845, avatar: "SW", skills: ["Piano", "Guitar", "Music Theory"] },
      { id: 5, name: "James Wilson", points: 1720, avatar: "JW", skills: ["Python", "Data Science", "Machine Learning"] }
    ],
    learning: [
      { id: 1, name: "Emma Thompson", points: 1950, avatar: "ET", skills: ["JavaScript", "UI Design", "React"] },
      { id: 2, name: "Michael Brown", points: 1830, avatar: "MB", skills: ["Spanish", "Japanese", "Italian"] },
      { id: 3, name: "Sophia Martinez", points: 1760, avatar: "SM", skills: ["Photography", "Digital Art", "Illustration"] },
      { id: 4, name: "Daniel Lee", points: 1690, avatar: "DL", skills: ["Guitar", "Piano", "Singing"] },
      { id: 5, name: "Olivia Clark", points: 1620, avatar: "OC", skills: ["Python", "Web Development", "React"] }
    ]
  };
  
  const categories = [
    { id: "all", name: "All Skills" },
    { id: "programming", name: "Programming" },
    { id: "languages", name: "Languages" },
    { id: "art", name: "Arts & Design" },
    { id: "music", name: "Music" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
          <p className="text-gray-600">
            Discover top community members who are actively teaching and learning various skills.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <Button 
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "gradient-bg" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <Tabs defaultValue="teaching" className="space-y-6">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="teaching">Top Teachers</TabsTrigger>
            <TabsTrigger value="learning">Top Learners</TabsTrigger>
          </TabsList>
          
          <TabsContent value="teaching">
            <Card>
              <CardHeader>
                <CardTitle>Top Teachers</CardTitle>
                <CardDescription>
                  Community members who have contributed the most teaching hours this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {leaderboardData.teaching.map((user, index) => (
                    <div key={user.id} className={`flex items-center p-4 ${index < 3 ? 'bg-primary/5 rounded-lg' : ''}`}>
                      <div className="w-8 mr-4 text-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.avatar}`} />
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">
                          {user.skills.slice(0, 3).join(", ")}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-primary">{user.points}</div>
                        <div className="text-xs text-gray-500">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="learning">
            <Card>
              <CardHeader>
                <CardTitle>Top Learners</CardTitle>
                <CardDescription>
                  Community members who have completed the most learning hours this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {leaderboardData.learning.map((user, index) => (
                    <div key={user.id} className={`flex items-center p-4 ${index < 3 ? 'bg-secondary/5 rounded-lg' : ''}`}>
                      <div className="w-8 mr-4 text-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.avatar}`} />
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">
                          {user.skills.slice(0, 3).join(", ")}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-secondary">{user.points}</div>
                        <div className="text-xs text-gray-500">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leaderboard;
