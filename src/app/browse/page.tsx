'use client';

import React, { useState } from 'react';
import { Search, Filter, Zap, BarChart, Eye, Star, Users, CheckCircle, ArrowRight, SlidersHorizontal, Grid3X3, List, Heart, ExternalLink, DollarSign } from 'lucide-react';

export default function BrowsePage() {
  const [activeTab, setActiveTab] = useState('categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Tools', count: 1247 },
    { id: 'content', name: 'Content Creation', count: 245 },
    { id: 'design', name: 'Design & Media', count: 189 },
    { id: 'data', name: 'Data & Analytics', count: 167 },
    { id: 'agents', name: 'AI Agents', count: 134 },
    { id: 'business', name: 'Business Tools', count: 298 },
    { id: 'development', name: 'Development', count: 156 }
  ];

  const tools = [
    {
      id: 1,
      name: 'ChatGPT',
      category: 'AI Agents',
      rating: 4.8,
      reviews: 15420,
      price: 'Free - $20/mo',
      description: 'Advanced conversational AI for writing, analysis, and problem-solving with excellent reasoning capabilities.',
      logo: '🤖',
      verified: true,
      trending: true
    },
    {
      id: 2,
      name: 'Midjourney',
      category: 'Design & Media',
      rating: 4.7,
      reviews: 8930,
      price: '$10 - $60/mo',
      description: 'State-of-the-art AI image generation with exceptional artistic quality and style control.',
      logo: '🎨',
      verified: true,
      trending: true
    },
    {
      id: 3,
      name: 'Claude',
      category: 'AI Agents',
      rating: 4.9,
      reviews: 7650,
      price: 'Free - $20/mo',
      description: 'Highly capable AI assistant with strong analytical abilities and ethical reasoning.',
      logo: '🧠',
      verified: true,
      trending: false
    },
    {
      id: 4,
      name: 'Notion AI',
      category: 'Business Tools',
      rating: 4.5,
      reviews: 12340,
      price: '$8 - $15/mo',
      description: 'AI-powered workspace that helps with writing, planning, and organizing your work.',
      logo: '📋',
      verified: true,
      trending: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">AI Hub Pro</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Intelligence</h1>
          <p className="text-gray-600">Discover AI tools and agents tailored to your needs</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8">
          {[
            { id: 'categories', label: 'Categories', icon: Filter },
            { id: 'matcher', label: 'AI Matcher', icon: Zap },
            { id: 'workflows', label: 'Workflows', icon: BarChart },
            { id: 'compare', label: 'Compare', icon: Eye }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Categories Tab Content */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Tools
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or feature..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Categories
                  </label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={selectedCategory === category.id}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {category.name}
                          <span className="text-gray-400 ml-1">({category.count})</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="bg-white rounded-lg border p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                      {tools.length} tools found
                    </span>
                    
                    {/* View Toggle */}
                    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded ${
                          viewMode === 'grid' 
                            ? 'bg-white shadow-sm text-purple-600' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Grid3X3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded ${
                          viewMode === 'list' 
                            ? 'bg-white shadow-sm text-purple-600' 
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Sort Dropdown */}
                  <select className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="popularity">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <div key={tool.id} className="bg-white rounded-lg border hover:shadow-lg transition-shadow p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{tool.logo}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-lg">{tool.name}</h3>
                            {tool.verified && (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                            {tool.trending && (
                              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                                Trending
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{tool.rating}</span>
                            </div>
                            <span className="text-xs text-gray-500">
                              {tool.reviews.toLocaleString()} reviews
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Heart className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{tool.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">{tool.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                          View Details
                        </button>
                        <button className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <ExternalLink className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Matcher Tab Content */}
        {activeTab === 'matcher' && (
          <div className="bg-white rounded-lg border p-8 text-center">
            <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Tool Matcher</h3>
            <p className="text-gray-600 mb-6">Tell us what you need and we'll find the perfect AI tools for you</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Start Matching
            </button>
          </div>
        )}

        {/* Workflows Tab Content */}
        {activeTab === 'workflows' && (
          <div className="bg-white rounded-lg border p-8 text-center">
            <BarChart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Workflows</h3>
            <p className="text-gray-600 mb-6">Discover pre-built workflows that combine multiple AI tools</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Browse Workflows
            </button>
          </div>
        )}

        {/* Compare Tab Content */}
        {activeTab === 'compare' && (
          <div className="bg-white rounded-lg border p-8 text-center">
            <Eye className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compare AI Tools</h3>
            <p className="text-gray-600 mb-6">Side-by-side comparison of features, pricing, and performance</p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
              Start Comparing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
