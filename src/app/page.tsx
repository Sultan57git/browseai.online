'use client';

import React, { useState } from 'react';
import { Search, Star, Users, Zap, Crown, ArrowRight, Play, CheckCircle, TrendingUp, Award, Sparkles, Bot, Target, Activity, Building2 } from 'lucide-react';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'content', name: 'Content Creation', icon: '✍️', count: 245, gradient: 'from-blue-500 to-cyan-400', description: 'AI writing, editing, and content tools' },
    { id: 'design', name: 'Design & Media', icon: '🎨', count: 189, gradient: 'from-purple-500 to-pink-400', description: 'Image, video, and design generation' },
    { id: 'data', name: 'Data & Analytics', icon: '📊', count: 167, gradient: 'from-green-500 to-emerald-400', description: 'Data analysis and visualization tools' },
    { id: 'agents', name: 'AI Agents', icon: '🤖', count: 134, gradient: 'from-orange-500 to-red-400', description: 'Conversational AI and chatbots' },
    { id: 'business', name: 'Business Tools', icon: '💼', count: 298, gradient: 'from-indigo-500 to-blue-400', description: 'Productivity and business automation' },
    { id: 'development', name: 'Development', icon: '⚡', count: 156, gradient: 'from-yellow-500 to-orange-400', description: 'Code generation and dev tools' }
  ];

  const featuredTools = [
    {
      id: 1,
      name: 'ChatGPT',
      category: 'AI Agents',
      rating: 4.8,
      reviews: 15420,
      price: 'Free - $20/mo',
      description: 'Revolutionary conversational AI that understands context and provides human-like responses for any task.',
      logo: '🤖',
      verified: true,
      trending: true,
      gradient: 'from-green-400 to-blue-500'
    },
    {
      id: 2,
      name: 'Midjourney',
      category: 'Design & Media',
      rating: 4.7,
      reviews: 8930,
      price: '$10 - $60/mo',
      description: 'Create stunning, artistic images from text descriptions with state-of-the-art AI technology.',
      logo: '🎨',
      verified: true,
      trending: false,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      name: 'Claude',
      category: 'AI Agents',
      rating: 4.9,
      reviews: 7650,
      price: 'Free - $20/mo',
      description: 'Advanced AI assistant with exceptional reasoning abilities and ethical guardrails.',
      logo: '🧠',
      verified: true,
      trending: true,
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Browse AI
                </span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-white/80 hover:text-white font-medium transition-colors">Browse</a>
                <a href="#" className="text-white/80 hover:text-white font-medium transition-colors">Categories</a>
                <a href="#" className="text-purple-300 hover:text-white font-medium bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  Pro Features
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-purple-500/25">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md border border-yellow-400/30 px-4 py-2 rounded-full mb-6">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-300 font-semibold">#1 AI Discovery Platform</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Discover AI Tools
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                That Actually Work
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Stop wasting time on mediocre AI tools. Browse our curated collection of 
              <span className="text-purple-300 font-semibold"> 1,200+ verified AI tools</span> and find exactly what you need.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl">
              <div className="flex items-center">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for AI tools, features, or use cases..."
                  className="flex-1 px-4 py-4 bg-transparent text-white placeholder-gray-400 text-lg outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'AI Tools', value: '1,200+', icon: Bot },
              { label: 'Happy Users', value: '50K+', icon: Users },
              { label: 'Expert Reviews', value: '25K+', icon: Star },
              { label: 'Success Stories', value: '500+', icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 mb-4 hover:bg-white/20 transition-all">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-300">Find the perfect AI tool for your specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-4xl p-4 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{category.count}</div>
                    <div className="text-gray-300 text-sm">tools</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                
                <div className="flex items-center text-purple-300 font-semibold group-hover:text-white transition-colors">
                  <span>Explore tools</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
              Top Rated AI Tools
            </h2>
            <p className="text-xl text-gray-300">Hand-picked tools that deliver real results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool) => (
              <div
                key={tool.id}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${tool.gradient} shadow-lg`}>
                    {tool.logo}
                  </div>
                  <div className="flex items-center space-x-2">
                    {tool.verified && (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                    {tool.trending && (
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        🔥 Trending
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-purple-300 text-sm mb-3">{tool.category}</p>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-semibold">{tool.rating}</span>
                  </div>
                  <span className="text-gray-300 text-sm">({tool.reviews.toLocaleString()} reviews)</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{tool.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{tool.price}</span>
                  <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg text-sm">
                    Try Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to 10x Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 50,000+ professionals who found their perfect AI tools through Browse AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-purple-500/25">
                🚀 Start Browsing Free
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all">
                ⚡ Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Browse AI</span>
              </div>
              <p className="text-gray-400">
                The world's most trusted AI tools directory.
              </p>
            </div>
            
            {[
              {
                title: 'Discover',
                links: ['All Tools', 'Categories', 'Featured', 'New Releases']
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Contact']
              },
              {
                title: 'Support',
                links: ['Help Center', 'API Docs', 'Privacy', 'Terms']
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Browse AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
