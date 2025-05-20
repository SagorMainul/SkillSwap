
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: 'How to Get the Most Out of SkillSwap',
      date: 'May 15, 2025',
      excerpt: 'Learn the best strategies for finding ideal skill matches and getting the most value from your exchanges.',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=SkillSwap+Tips'
    },
    {
      id: 2,
      title: 'Success Stories: From Beginner to Pro',
      date: 'May 10, 2025',
      excerpt: 'Read about how SkillSwap users went from complete beginners to skilled practitioners through peer learning.',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Success+Stories'
    },
    {
      id: 3,
      title: 'The Benefits of Peer-to-Peer Learning',
      date: 'May 5, 2025',
      excerpt: 'Discover why learning from peers can be more effective than traditional education methods.',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Peer+Learning'
    },
    {
      id: 4,
      title: 'Building Your Skill Portfolio',
      date: 'April 28, 2025',
      excerpt: 'Tips for showcasing your skills and building a compelling portfolio that attracts skill swap opportunities.',
      image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Portfolio+Tips'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 p-4 pt-24 pb-16 container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">SkillSwap Blog</h1>
          <p className="text-gray-600">
            Learn tips, tricks, and discover inspiring stories from the SkillSwap community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover-scale">
              <div className="h-48 bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.id}`} className="text-primary hover:underline">
                  Read More →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
