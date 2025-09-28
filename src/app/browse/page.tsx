'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, Zap, BarChart, Eye, Star, Users, CheckCircle, ArrowRight, SlidersHorizontal, Grid3X3, List, Heart, ExternalLink, DollarSign, X } from 'lucide-react';

export default function BrowsePage() {
  const [activeTab, setActiveTab] = useState('categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [favorites, setFavorites] = useState(new Set());
  const [compareList, setCompareList] = useState([]);

  const categories = [
    { id: 'all', name: 'All Tools', count: 1247 },
    { id: 'content', name: 'Content Creation', count: 245 },
    { id: 'design', name: 'Design & Media', count: 189 },
    { id: 'data', name: 'Data & Analytics', count: 167 },
    { id: 'agents', name: 'AI Agents', count: 134 },
    { id: 'business', name: 'Business Tools', count: 298 },
    { id: 'development', name: 'Development', count: 156 }
  ];

  const allTools = [
    {
      id: 1,
      name: 'ChatGPT',
      category: 'agents',
      rating: 4.8,
      reviews: 15420,
      price: 'Freemium',
      priceRange: 'free',
      description: 'Advanced conversational AI for writing, analysis, and problem-solving with excellent reasoning capabilities.',
      features: ['Natural Language Processing', 'Code Generation', 'Creative Writing', 'Data Analysis'],
      logo: '🤖',
      verified: true,
      trending: true,
      popularity: 98
    },
    {
      id: 2,
      name: 'Midjourney',
      category: 'design',
      rating: 4.7,
      reviews: 8930,
      price: 'Paid',
      priceRange: 'paid',
      description: 'State-of-the-art AI image generation with exceptional artistic quality and style control.',
      features: ['Image Generation', 'Style Transfer', 'High Resolution', 'Commercial License'],
      logo: '🎨',
      verified: true,
      trending: true,
      popularity: 94
    },
    {
      id: 3,
      name: 'Claude',
      category: 'agents',
      rating: 4.9,
      reviews: 7650,
      price: 'Freemium',
      priceRange: 'free',
      description: 'Highly capable AI assistant with strong analytical abilities and ethical reasoning.',
      features: ['Long Context', 'Document Analysis', 'Code Review', 'Research Assistance'],
      logo: '🧠',
      verified: true,
      trending: false,
      popularity: 91
    },
    {
      id: 4,
      name: 'Notion AI',
      category: 'business',
      rating: 4.5,
      reviews: 12340,
      price: 'Freemium',
      priceRange: 'free',
      description: 'AI-powered workspace that helps with writing, planning, and organizing your work.',
      features: ['Writing Assistant', 'Task Management', 'Database AI', 'Templates'],
      logo: '📋',
      verified: true,
      trending: false,
      popularity: 89
    },
    {
      id: 5,
      name: 'GitHub Copilot',
      category: 'development',
      rating: 4.6,
      reviews: 9870,
      price: 'Paid',
      priceRange: 'paid',
      description: 'AI pair programmer that suggests code and entire functions in real-time.',
      features: ['Code Completion', 'Multiple Languages', 'IDE Integration', 'Code Explanations'],
      logo: '👨‍💻',
      verified: true,
      trending: false,
      popularity: 85
    },
    {
      id: 6,
      name: 'Canva AI',
      category: 'design',
      rating: 4.4,
      reviews: 18750,
      price: 'Freemium',
      priceRange: 'free',
      description: 'Design platform with AI-powered tools for creating graphics, presentations, and videos.',
      features: ['Design Templates', 'AI Image Generator', 'Brand Kit', 'Team Collaboration'],
      logo: '🎭',
      verified: true,
      trending: false,
      popularity: 87
    }
  ];

  // Filtering and sorting logic
  const filteredTools = useMemo(() => {
    let filtered = allTools;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Price filter
    if (priceFilter !== 'all') {
      filtered = filtered.filter(tool => tool.priceRange === priceFilter);
    }

    // Rating filter
    if (ratingFilter > 0) {
      filtered = filtered.filter(tool => tool.rating >= ratingFilter);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'rating':
          return b.rating - a.rating;
        case 'reviews':
          return b.reviews - a.reviews;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, priceFilter, ratingFilter, sortBy]);

  const toggleFavorite = (toolId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(toolId)) {
        newFavorites.delete(toolId);
      } else {
        newFavorites.add(toolId);
      }
      return newFavorites;
    });
  };

  const addToCompare = (tool) => {
    if (compareList.length < 3 && !compareList.find(t => t.id === tool.id)) {
      setCompareList([...compareList, tool]);
    }
  };

  const removeFromCompare = (toolId) => {
    setCompareList(compareList.filter(t => t.id !== toolId));
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceFilter('all');
    setRatingFilter(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">AI Hub Pro</span>
              </a>
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

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-blue-900">Compare Tools ({compareList.length}/3):</span>
                <div className="flex space-x-2">
                  {compareList.map(tool => (
                    <div key={tool.id} className="bg-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                      <span>{tool.name}</span>
                      <button onClick={() => removeFromCompare(tool.id)}>
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setActiveTab('compare')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
              >
                Compare Now
              </button>
            </div>
          </div>
        )}

        {/* Categories Tab Content */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg flex items-center">
                    <SlidersHorizontal className="w-5 h-5 mr-2" />
                    Filters
                  </h3>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-purple-600 hover:text-purple-700"
                  >
                    Clear All
                  </button>
                </div>

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
                      <label key={category.id} className="flex items-center cursor-pointer">
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

                {/* Price Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Pricing
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'all', name: 'All Pricing' },
                      { id: 'free', name: 'Free / Freemium' },
                      { id: 'paid', name: 'Paid Plans' }
                    ].map((price) => (
                      <label key={price.id} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value={price.id}
                          checked={priceFilter === price.id}
                          onChange={(e) => setPriceFilter(e.target.value)}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{price.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Minimum Rating
                  </label>
                  <div className="space-y-2">
                    {[0, 3, 4, 4.5].map((rating) => (
                      <label key={rating} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          value={rating}
                          checked={ratingFilter === rating}
                          onChange={(e) => setRatingFilter(Number(e.target.value))}
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 flex items-center">
                          {rating === 0 ? 'Any Rating' : (
                            <>
                              {rating}+ <Star className="w-3 h-3 ml-1 fill-yellow-400 text-yellow-400" />
                            </>
                          )}
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
                      {filteredTools.length} tools found
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
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {/* Tools Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredTools.map((tool) => (
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
                      <button 
                        onClick={() => toggleFavorite(tool.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${
                          favorites.has(tool.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                        }`} />
                      </button>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {tool.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600">{tool.price}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => addToCompare(tool)}
                          className="border border-gray-300 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-xs"
                        >
                          Compare
                        </button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredTools.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No tools found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search criteria or browse different categories
                  </p>
                  <button
                    onClick={clearFilters}
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* AI Matcher Tab */}
        {activeTab === 'matcher' && (
          <div className="bg-white rounded-lg border p-8 text-center">
            <Zap className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Tool Matcher</h3>
            <p className="text-gray-600 mb-6">Tell us what you need and we'll find the perfect AI tools for you</p>
            <textarea 
              placeholder="Describe what you want to accomplish..."
              className="w-full max-w-md mx-auto p-4 border rounded-lg mb-4"
              rows={3}
            />
            <br />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Find My Tools
            </button>
          </div>
        )}

        {/* Workflows Tab */}
        {activeTab === 'workflows' && (
          <div className="bg-white rounded-lg border p-8 text-center">
            <BarChart className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Workflows</h3>
            <p className="text-gray-600 mb-6">Discover pre-built workflows that combine multiple AI tools</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
              {[
                'Content Creation Pipeline',
                'Data Analysis Workflow', 
                'Customer Support Stack'
              ].map(workflow => (
                <div key={workflow} className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">{workflow}</h4>
                  <p className="text-sm text-gray-600">3-5 integrated tools</p>
                </div>
              ))}
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Browse Workflows
            </button>
          </div>
        )}

        {/* Compare Tab */}
        {activeTab === 'compare' && (
          <div className="bg-white rounded-lg border p-8">
            <div className="text-center mb-8">
              <Eye className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compare AI Tools</h3>
              <p className="text-gray-600">Side-by-side comparison of features, pricing, and performance</p>
            </div>
            
            {compareList.length === 0 ? (
              <div className="text-center">
                <p className="text-gray-600 mb-4">No tools selected for comparison</p>
                <button 
                  onClick={() => setActiveTab('categories')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Browse Tools to Compare
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left p-4">Feature</th>
                      {compareList.map(tool => (
                        <th key={tool.id} className="text-center p-4">
                          <div className="flex flex-col items-center">
                            <div className="text-2xl mb-2">{tool.logo}</div>
                            <div className="font-semibold">{tool.name}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 font-medium">Rating</td>
                      {compareList.map(tool => (
                        <td key={tool.id} className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{tool.rating}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-medium">Pricing</td>
                      {compareList.map(tool => (
                        <td key={tool.id} className="p-4 text-center">{tool.price}</td>
                      ))}
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-medium">Reviews</td>
                      {compareList.map(tool => (
                        <td key={tool.id} className="p-4 text-center">{tool.reviews.toLocaleString()}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
