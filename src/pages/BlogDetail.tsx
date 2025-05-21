
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams, Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, this would be fetched from an API
  const post = {
    id: parseInt(id || "1"),
    title: 'How to Get the Most Out of SkillSwap',
    date: 'May 15, 2025',
    author: 'Sarah Williams',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1000',
    content: `
      <p class="mb-4">Learning a new skill can be challenging, but with the right approach, you can maximize your learning potential and get the most out of your SkillSwap experience.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-3">Finding the Right Match</h2>
      <p class="mb-4">The first step to a successful skill swap is finding the right person to learn from. Look for someone who not only has expertise in the skill you want to learn but also has a teaching style that matches your learning preferences.</p>
      <p class="mb-4">Take time to read through profiles and don't hesitate to message potential matches before committing to a swap. A brief conversation can help you determine if you'll work well together.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-3">Setting Clear Goals</h2>
      <p class="mb-4">Before your first session, have a clear idea of what you want to achieve. Are you looking to learn the basics, or do you have specific areas you want to focus on? Communicate these goals to your skill partner so they can tailor their teaching approach.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-3">Consistent Practice</h2>
      <p class="mb-4">Learning any new skill requires consistent practice. Set aside regular time between sessions to practice what you've learned. Even 15-20 minutes of daily practice can make a significant difference in your progress.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-3">Effective Communication</h2>
      <p class="mb-4">Don't be afraid to ask questions or request clarification when you don't understand something. Good communication is key to effective learning. If a particular teaching method isn't working for you, let your skill partner know so they can adjust their approach.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-3">Tracking Your Progress</h2>
      <p class="mb-4">Keep a learning journal to track your progress. Note what you've learned in each session, any challenges you faced, and questions you want to ask in your next session. This will help you see your improvement over time and stay motivated.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-3">Giving Back</h2>
      <p class="mb-4">Remember that SkillSwap is about mutual benefit. Put as much effort into teaching your skill as you do into learning a new one. This creates a positive learning environment for both you and your skill partner.</p>
      
      <h2 class="text-2xl font-bold mt-6 mb-3">Conclusion</h2>
      <p class="mb-4">By following these tips, you'll be well on your way to getting the most out of your SkillSwap experience. Remember, learning is a journey, not a destination. Enjoy the process and celebrate your progress along the way.</p>
    `
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Blog Hero Section */}
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-3">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-lg overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
            
            <div className="mt-12 border-t pt-8">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/blog">
                <Button variant="outline">← Back to all articles</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
