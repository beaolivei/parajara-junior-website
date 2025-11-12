import React from 'react';
import { BlogPost } from '../types';

interface BlogProps {
  posts: BlogPost[];
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  window.location.hash = href;
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <section id="blog-preview" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Últimas do Blog</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Mantenha-se informado com nossas análises e dicas mais recentes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden group flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <div className="overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex-grow">{post.title}</h3>
                <div className="my-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a 
                    href={`#/blog/${post.slug}`}
                    onClick={(e) => handleNavClick(e, `#/blog/${post.slug}`)}
                    className="font-bold text-green-600 hover:text-green-800 transition-colors"
                  >
                    Leia Mais &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#/blog"
            onClick={(e) => handleNavClick(e, '#/blog')}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg uppercase transition-transform transform hover:scale-105 shadow-lg"
          >
            Ver Todos os Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
