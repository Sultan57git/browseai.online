'use client';

import React, { useState } from 'react';
import { Search, Star, Users, Zap, Crown, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Browse AI</span>
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/30 px-4 py-2 rounded-full mb-6">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">#1 AI Discovery Platform</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 text-white">
            Discover AI Tools
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              That Actually Work
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Stop wasting time on mediocre AI tools. Browse our curated collection of 
            <span className="text-purple-300 font-semibold"> 1,200+ verified AI tools</span> and find exactly what you need.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-2">
              <div className="flex items-center">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for AI tools..."
                  className="flex-1 px-4 py-4 bg-transparent text-white placeholder-gray-400 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'AI Tools', value: '1,200+' },
              { label: 'Happy Users', value: '50K+' },
              { label: 'Expert Reviews', value: '25K+' },
              { label: 'Success Stories', value: '500+' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 border border-white/20 rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-300">Find the perfect AI tool for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Content Creation', icon: '✍️', count: 245, description: 'AI writing and editing tools' },
              { name: 'Design & Media', icon: '🎨', count: 189, description: 'Image and video generation' },
              { name: 'Data & Analytics', icon: '📊', count: 167, description: 'Data analysis tools' },
              { name: 'AI Agents', icon: '🤖', count: 134, description: 'Conversational AI' },
              { name: 'Business Tools', icon: '💼', count: 298, description: 'Productivity automation' },
              { name: 'Development', icon: '⚡', count: 156, description: 'Code generation tools' }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl p-4 rounded-xl bg-purple-600">{category.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{category.count}</div>
                    <div className="text-gray-300 text-sm">tools</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                
                <div className="flex items-center text-purple-300 font-semibold">
                  <span>Explore tools</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-purple-600/20 border border-purple-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to 10x Your Productivity?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 50,000+ professionals who found their perfect AI tools
            </p>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700">
              🚀 Start Browsing Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
