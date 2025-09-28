'use client';

import React, { useState } from 'react';
import { Search, Star, Users, Zap, Crown, ArrowRight, TestTube, Activity, Target, Building2, BarChart, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Content Creation', icon: '✍️', count: 245, description: 'AI writing, editing, and content tools' },
    { name: 'Design & Media', icon: '🎨', count: 189, description: 'Image, video, and design generation' },
    { name: 'Data & Analytics', icon: '📊', count: 167, description: 'Data analysis and visualization tools' },
    { name: 'AI Agents', icon: '🤖', count: 134, description: 'Conversational AI and chatbots' },
    { name: 'Business Tools', icon: '💼', count: 298, description: 'Productivity and business automation' },
    { name: 'Development', icon: '⚡', count: 156, description: 'Code generation and dev tools' }
  ];

  const featuredTools = [
    {
      name: 'ChatGPT',
      category: 'AI Agents',
      rating: 4.8,
      reviews: 15420,
      price: 'Free - $20/mo',
      description: 'Conversational AI for writing, analysis, and problem-solving',
      logo: '🤖',
      verified: true
    },
    {
      name: 'Midjourney',
      category: 'Design & Media',
      rating: 4.7,
      reviews: 8930,
      price: '$10 - $60/mo',
      description: 'High-quality AI image generation from text prompts',
      logo: '🎨',
      verified: true
    },
    {
      name: 'Claude',
      category: 'AI Agents',
      rating: 4.9,
      reviews: 7650,
      price: 'Free - $20/mo',
      description: 'Advanced AI assistant for analysis and coding',
      logo: '🧠',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">AI Hub Pro</span>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/browse" className="flex items-center space-x-2 text-blue-600 bg-blue-50 px-3 py-2 rounded-lg font-medium">
                  <Search className="w-4 h-4" />
                  <span>Browse Intelligence</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium">
                  <BarChart className="w-4 h-4" />
                  <span>Marketplace</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium bg-purple-50 px-3 py-2 rounded-lg">
                  <Zap className="w-4 h-4" />
                  <span>Pro Features</span>
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-yellow-600 bg-yellow-50 px-3 py-2 rounded-lg">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-medium">#1 AI Directory</span>
              </div>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Pro Account
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pro Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <Zap className="w-7 h-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-900">World-Class Pro Features</h2>
          </div>
          <p className="text-lg text-gray-600 mb-8">The advanced tools that make us the world's best AI directory</p>
          
          {/* Pro Features Icons Row */}
          <div className="flex items-center justify-between mb-8 bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center space-x-3 text-center hover:bg-white rounded-xl p-4 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <TestTube className="w-6 h-6 text-purple-600" />
                <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-gray-700 font-medium">Testing Sandbox</span>
            </div>
            
            <div className="flex items-center space-x-3 text-center hover:bg-white rounded-xl p-4 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <Activity className="w-6 h-6 text-blue-600" />
                <BarChart className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-700 font-medium">Live Monitoring</span>
            </div>
            
            <div className="flex items-center space-x-3 text-center hover:bg-white rounded-xl p-4 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <Target className="w-6 h-6 text-red-500" />
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-gray-700 font-medium">Smart Stacking</span>
            </div>
            
            <div className="flex items-center space-x-3 text-center hover:bg-white rounded-xl p-4 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-green-600" />
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-gray-700 font-medium">Community Intel</span>
            </div>
            
            <div className="flex items-center space-x-3 text-center hover:bg-white rounded-xl p-4 transition-colors cursor-pointer">
              <div className="flex items-center space-x-2">
                <Building2 className="w-6 h-6 text-indigo-600" />
                <BarChart className="w-5 h-5 text-indigo-600" />
              </div>
              <span className="text-gray-700 font-medium">Enterprise Suite</span>
            </div>
          </div>

          {/* AI Tool Testing Sandbox Feature Banner */}
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <TestTube className="w-10 h-10 text-white" />
                <h3 className="text-3xl font-bold">AI Tool Testing Sandbox</h3>
              </div>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl leading-relaxed">
                Test any AI tool live before you commit. Compare multiple tools side-by-side with your actual data.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                  Start Free Test
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute right-12 bottom-0 w-32 h-32 bg-white/5 rounded-full transform translate-y-16"></div>
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
            {categories.map((category, index) => (
              
                key={index}
                href="/browse"
                className="bg-white rounded-xl p-6 border hover:shadow-lg transition-all cursor-pointer group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
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
              </a>
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
            <a 
              href="/browse"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              View All Tools
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool, index) => (
              <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{tool.logo}</div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">{tool.name}</h3>
                        {tool.verified && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{tool.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{tool.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-600">{tool.price}</span>
                  <span className="text-xs text-gray-500">{tool.reviews.toLocaleString()} reviews</span>
                </div>
              </div>
            ))}
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
                <span className="text-xl font-bold">AI Hub Pro</span>
              </div>
              <p className="text-gray-400">
                The world's most comprehensive AI tools directory.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Browse</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/browse" className="hover:text-white transition-colors">All Tools</a></li>
                <li><a href="/browse" className="hover:text-white transition-colors">Categories</a></li>
                <li><a href="/browse" className="hover:text-white transition-colors">Featured</a></li>
                <li><a href="/browse" className="hover:text-white transition-colors">New Tools</a></li>
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
            <p>&copy; 2024 AI Hub Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
