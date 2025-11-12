import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';
import { getBlogPosts } from './services/blogService';
import { BlogPost } from './types';

const App: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const renderPage = () => {
    if (isLoading) {
      return <div className="flex justify-center items-center min-h-screen">Carregando...</div>;
    }

    if (route.startsWith('#/blog/')) {
      const slug = route.replace('#/blog/', '');
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        return <BlogPostPage post={post} />;
      }
      return <div className="text-center py-40 min-h-screen">Post não encontrado. <a href="#/blog" className="text-green-600 underline">Voltar para o blog</a>.</div>;
    }

    if (route === '#/blog') {
      return <BlogListPage posts={blogPosts} />;
    }

    // Default to home page, passing latest posts
    return <HomePage latestPosts={blogPosts.slice(0, 3)} />;
  };

  return (
    <div>
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
