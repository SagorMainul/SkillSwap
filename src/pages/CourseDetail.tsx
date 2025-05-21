
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Clock, BookOpen, Calendar, Star, StarHalf } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, this would be fetched from an API
  const course = {
    id: parseInt(id || "1"),
    title: 'JavaScript Fundamentals',
    category: 'Programming',
    level: 'Beginner',
    duration: '4 hours',
    lessons: 10,
    description: 'Learn the basics of JavaScript programming language, including variables, data types, functions, and more. This comprehensive course is designed for beginners who want to start their journey in web development.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop',
    instructor: {
      name: 'Alex Johnson',
      avatar: '',
      bio: 'Frontend developer with 5+ years of experience teaching web technologies.',
    },
    rating: 4.8,
    reviews: 24,
    curriculum: [
      { title: 'Introduction to JavaScript', duration: '25 min' },
      { title: 'Variables and Data Types', duration: '40 min' },
      { title: 'Functions and Scope', duration: '35 min' },
      { title: 'Arrays and Objects', duration: '45 min' },
      { title: 'DOM Manipulation', duration: '50 min' },
      { title: 'Event Handling', duration: '30 min' },
      { title: 'Asynchronous JavaScript', duration: '55 min' },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Course Hero Section */}
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm">{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-sm">{course.rating} ({course.reviews} reviews)</span>
                  </div>
                </div>
                
                <Button className="gradient-bg">Start Learning</Button>
              </div>
              
              <div className="w-full md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-[220px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Course Curriculum</h2>
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {course.curriculum.map((lesson, index) => (
                      <li key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Lesson {index + 1}: {lesson.title}</h3>
                          </div>
                          <div className="text-sm text-gray-500">
                            {lesson.duration}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Instructor</h2>
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{course.instructor.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{course.instructor.bio}</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">Connect with Instructor</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
