import React from 'react';
import { BlogPost } from '../types';

interface BlogPostPageProps {
  post: BlogPost;
}

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  window.location.hash = href;
};

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  return (
    <div className="bg-white py-20 pt-32 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-8">
          <a href="#/blog" onClick={(e) => handleNavClick(e, '#/blog')} className="text-green-600 hover:text-green-800 font-semibold">&larr; Voltar para o Blog</a>
        </div>
        <article>
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-lg" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>
          <p className="text-md text-gray-500 mb-4">{post.date}</p>
          <div className="mb-6">
            {post.tags.map(tag => (
              <span key={tag} className="inline-block bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="prose lg:prose-xl max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
            {post.text}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;
