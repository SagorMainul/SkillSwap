
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Courses = () => {
  const location = useLocation();
  
  // Sample course data - in a real app, this would come from an API
  const courses = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      category: 'Programming',
      level: 'Beginner',
      duration: '4 hours',
      lessons: 10,
      description: 'Learn the basics of JavaScript programming language.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Digital Photography Basics',
      category: 'Photography',
      level: 'Beginner',
      duration: '3 hours',
      lessons: 8,
      description: 'Master the fundamentals of digital photography.',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Spanish for Beginners',
      category: 'Languages',
      level: 'Beginner',
      duration: '5 hours',
      lessons: 12,
      description: 'Start your journey learning Spanish with this beginner course.',
      image: 'https://images.unsplash.com/photo-1581273154768-0a9a16887d90?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Advanced React Patterns',
      category: 'Programming',
      level: 'Advanced',
      duration: '6 hours',
      lessons: 15,
      description: 'Deep dive into advanced React patterns and best practices.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'Guitar for Beginners',
      category: 'Music',
      level: 'Beginner',
      duration: '4.5 hours',
      lessons: 12,
      description: 'Start playing guitar with this comprehensive beginner course.',
      image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'Cooking Basics',
      category: 'Culinary',
      level: 'Beginner',
      duration: '3 hours',
      lessons: 8,
      description: 'Learn essential cooking techniques and recipes.',
      image: 'https://images.unsplash.com/photo-1556911073-a517e752729c?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  // Get isLoggedIn state from location state or use false as default
  const isLoggedIn = location.state?.isLoggedIn || false;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Courses</h1>
          <p className="text-gray-600">
            Browse our collection of free skill-based courses. Get verified as a student for complete access!
          </p>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-auto flex flex-wrap gap-2 mb-4 md:mb-0">
            <Button variant="outline" className="bg-primary/5">All Categories</Button>
            <Button variant="outline">Programming</Button>
            <Button variant="outline">Languages</Button>
            <Button variant="outline">Music</Button>
            <Button variant="outline">Photography</Button>
            <Button variant="outline">Culinary</Button>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline">Beginner</Button>
            <Button variant="outline">Intermediate</Button>
            <Button variant="outline">Advanced</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover-scale">
              <div className="h-48 bg-gray-100 relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-primary/90 text-white px-2 py-1 rounded text-xs">
                  {course.level}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="flex justify-between">
                  <span>{course.category}</span>
                  <span>{course.lessons} lessons • {course.duration}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full gradient-bg">View Course</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
