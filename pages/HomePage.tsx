// Fix: Import useEffect hook from React.
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import { BlogPost } from '../types';

interface HomePageProps {
  latestPosts: BlogPost[];
}

const HomePage: React.FC<HomePageProps> = ({ latestPosts }) => {
  // This effect handles smooth scrolling for homepage anchors
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && !hash.startsWith('#/')) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use a timeout to ensure the element is rendered before scrolling
        setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Blog posts={latestPosts} />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
