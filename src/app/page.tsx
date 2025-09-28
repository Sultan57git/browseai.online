'use client';

import React, { useState } from 'react';
import { Search, Filter, Star, Users, Zap, Code, Briefcase, Palette, BarChart, Bot, ChevronRight, Play, Eye, DollarSign, Clock, TestTube, Activity, Target, Building2, Crown, Settings, Download, Upload, MessageSquare, TrendingUp, AlertTriangle, CheckCircle, XCircle, Pause, RotateCcw, Plus, Trash2, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'content', name: 'Content Creation', icon: '📝', count: 245, color: 'bg-blue-100 text-blue-800', description: 'AI writing, editing, and content tools' },
    { id: 'design', name: 'Design & Media', icon: '🎨', count: 189, color: 'bg-purple-100 text-purple-800', description: 'Image, video, and design generation' },
    { id: 'data', name: 'Data & Analytics', icon: '📊', count: 167, color: 'bg-green-100 text-green-800', description: 'Data analysis and visualization tools' },
    { id: 'agents', name: 'AI Agents', icon: '🤖', count: 134, color: 'bg-orange-100 text-orange-800', description: 'Conversational AI and chatbots' },
    { id: 'business', name: 'Business Tools', icon: '💼', count: 298, color: 'bg-indigo-100 text-indigo-800', description: 'Productivity and business automation' },
    { id: 'development', name: 'Development', icon: '🔧', count: 156, color: 'bg-red-100 text-red-800', description: 'Code generation and dev tools' }
  ];

  const featuredTools = [
    {
      id: 1,
      name: 'ChatGPT',
      category: 'AI Agents',
      rating: 4.8,
      reviews: 15420,
      price: 'Free - $20/mo',
      description: 'Conversational AI for writing, analysis, and problem-solving',
      features: ['API Available', 'Integrations', 'Mobile App'],
      popularity: 98,
      logo: '🤖'
    },
    {
      id: 2,
      name: 'Synthesia',
      category: 'Content Creation',
      rating: 4.6,
      reviews: 3240,
      price: '$30 - $90/mo',
      description: 'AI video generation with realistic avatars',
      features: ['40+ Languages', 'Custom Avatars', 'API'],
      popularity: 87,
      logo: '🎥'
    },
    {
      id: 3,
      name: 'Midjourney',
      category: 'Design & Media',
      rating: 4.7,
      reviews: 8930,
      price: '$10 - $60/mo',
      description: 'High-quality AI image generation from text prompts',
      features: ['High Resolution', 'Commercial Use', 'Discord Bot'],
      popularity: 94,
      logo: '🎨'
    },
    {
      id: 4,
      name: 'Claude',
      category: 'AI Agents',
      rating: 4.9,
      reviews: 7650,
      price: 'Free - $20/mo',
      description: 'Advanced AI assistant for analysis and coding',
      features: ['Large Context', 'Code Generation', 'Document Analysis'],
      popularity: 91,
      logo: '🧠'
    },
    {
      id: 5,
      name: 'Notion AI',
      category: 'Business Tools',
      rating: 4.5,
      reviews: 12340,
      price: '$8 - $15/mo',
      description: 'AI-powered workspace for notes and collaboration',
      features: ['Writing Assistant', 'Database AI', 'Templates'],
      popularity: 89,
      logo: '📋'
    },
    {
      id: 6,
      name: 'GitHub Copilot',
      category: 'Development',
      rating: 4.6,
      reviews: 9870,
      price: '$10 - $19/mo',
      description: 'AI pair programmer for code completion',
      features: ['Code Suggestions', 'Multiple Languages', 'IDE Integration'],
      popularity: 85,
      logo: '👨‍💻'
    }
  ];

  const stats = [
    { label: 'AI Tools', value: '1,200+', icon: Bot },
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Reviews', value: '25K+', icon: Star },
    { label: 'Categories', value: '50+', icon: Filter }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Browse AI</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Browse</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Categories</a>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium bg-purple-50 px-3 py-2 rounded-lg">
                  Pro Features
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Crown className="w-6 h-6 text-yellow-400" />
              <span className="bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                #1 AI Directory Platform
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover the Perfect
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> AI Tool</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
              Browse 1,200+ AI tools, compare features, read reviews, and find the perfect solution for your needs.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 max-w-2xl mx-auto mb-8 shadow-2xl">
              <div className="flex items-center">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search AI tools, features, or categories..."
                  className="flex-1 px-4 py-4 text-gray-900 text-lg outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pro Features Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Browse AI?</h2>
            <p className="text-xl text-gray-600">Advanced features that make us the world's best AI directory</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <TestTube className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Testing Sandbox</h3>
              <p className="text-sm text-gray-600">Test tools before you buy</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Live Monitoring</h3>
              <p className="text-sm text-gray-600">Real-time tool performance</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
              <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Smart Stacking</h3>
              <p className="text-sm text-gray-600">Automated tool workflows</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Community Intel</h3>
              <p className="text-sm text-gray-600">Crowdsourced insights</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-colors">
              <Building2 className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Enterprise Suite</h3>
              <p className="text-sm text-gray-600">Team management tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the right AI tool for your specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl p-6 border hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.count} tools
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>Explore tools</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Tools</h2>
              <p className="text-xl text-gray-600">Most popular and highest-rated AI tools</p>
            </div>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              View All Tools
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <div key={tool.id} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{tool.logo}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{tool.name}</h3>
                      <span className="text-sm text-gray-500">{tool.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{tool.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-600">{tool.price}</span>
                  <span className="text-xs text-gray-500">{tool.reviews.toLocaleString()} reviews</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect AI Tool?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join 50,000+ users who trust Browse AI for their AI tool discovery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Browsing Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Browse AI</span>
              </div>
              <p className="text-gray-400">
                The world's most comprehensive AI tools directory.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Browse</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Tools</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Featured</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Submit Tool</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Browse AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
