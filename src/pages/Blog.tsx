
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  
  // Sample blog posts data - in a real app, this would come from an API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How to Get the Most Out of SkillSwap',
      date: 'May 15, 2025',
      excerpt: 'Learn the best strategies for finding ideal skill matches and getting the most value from your exchanges.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400',
      category: 'Tips & Strategies'
    },
    {
      id: 2,
      title: 'Success Stories: From Beginner to Pro',
      date: 'May 10, 2025',
      excerpt: 'Read about how SkillSwap users went from complete beginners to skilled practitioners through peer learning.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400',
      category: 'Success Stories'
    },
    {
      id: 3,
      title: 'The Benefits of Peer-to-Peer Learning',
      date: 'May 5, 2025',
      excerpt: 'Discover why learning from peers can be more effective than traditional education methods.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400',
      category: 'Education'
    },
    {
      id: 4,
      title: 'Building Your Skill Portfolio',
      date: 'April 28, 2025',
      excerpt: 'Tips for showcasing your skills and building a compelling portfolio that attracts skill swap opportunities.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400',
      category: 'Tips & Strategies'
    }
  ];
  
  // Get unique categories for filter buttons
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Apply filters whenever activeCategory changes
  useEffect(() => {
    if (activeCategory) {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [activeCategory]);

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
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeCategory === null ? "default" : "outline"} 
              className={activeCategory === null ? "bg-primary/5" : ""}
              onClick={() => setActiveCategory(null)}
            >
              All Categories
            </Button>
            
            {categories.map(category => (
              <Button 
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={activeCategory === category ? "bg-primary/5" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover-scale">
              <div className="h-48 bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
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
          
          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No blog posts match your selected category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setActiveCategory(null)}
              >
                Show All Posts
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
