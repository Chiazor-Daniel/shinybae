import React from "react";
import { Calendar, Clock, ArrowRight, Instagram, Heart } from "lucide-react";
import { BlogPost } from "../types";

interface BlogProps {
  posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-rose-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Beauty tips, behind-the-scenes stories, and everything you need to
            know about lip care and confidence
          </p>
        </div>

        {/* Featured Post */}
        {posts.length > 0 && (
          <div className="mb-16">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {posts[0].category}
                  </span>
                  <div className="flex items-center text-rose-200">
                    <Calendar size={16} className="mr-2" />
                    {new Date(posts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-rose-200">
                    <Clock size={16} className="mr-2" />
                    {posts[0].readTime}
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                  {posts[0].excerpt}
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-rose-500 text-white font-semibold rounded-full hover:bg-rose-600 transition-colors">
                  Read More
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {posts.slice(1).map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-500 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center text-rose-500 font-semibold hover:text-rose-600 transition-colors">
                  Read More
                  <ArrowRight className="ml-1" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Social CTA */}
        <div className="bg-gradient-to-r from-rose-50 to-rose-50 rounded-3xl p-12 text-center">
          <Heart className="mx-auto mb-6 text-rose-500" size={48} />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Get Social 💕
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Follow us for daily beauty inspiration, tutorials, and
            behind-the-scenes content. Join our community of confident, shiny
            babes!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="mr-2" size={20} />
              Follow on Instagram
            </a>
            <a
              href="#"
              className="flex items-center px-8 py-4 border-2 border-rose-300 text-rose-600 font-semibold rounded-full hover:bg-rose-50 transition-all duration-300"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.957 1.407-5.957s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
              Follow on TikTok
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
