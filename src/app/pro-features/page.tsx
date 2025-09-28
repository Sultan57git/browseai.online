'use client';

import React, { useState, useEffect } from 'react';
import { TestTube, Activity, Target, Users, Building2, BarChart, Play, Pause, CheckCircle, AlertTriangle, XCircle, TrendingUp, Clock, Download, Settings, Plus, Trash2 } from 'lucide-react';

export default function ProFeaturesPage() {
  const [activeFeature, setActiveFeature] = useState('testing');

  // Testing Sandbox State
  const [sandboxTests, setSandboxTests] = useState([
    { 
      id: 1, 
      name: 'ChatGPT vs Claude Comparison', 
      tools: ['ChatGPT', 'Claude'], 
      status: 'running', 
      progress: 65,
      prompt: 'Write a marketing email for a new AI product',
      results: {
        'ChatGPT': { score: 8.5, time: '2.3s', cost: '$0.02' },
        'Claude': { score: 9.1, time: '1.8s', cost: '$0.03' }
      }
    },
    { 
      id: 2, 
      name: 'Image Generation Test', 
      tools: ['Midjourney', 'DALL-E'], 
      status: 'completed', 
      progress: 100,
      prompt: 'Create a futuristic city landscape',
      results: {
        'Midjourney': { score: 9.2, time: '45s', cost: '$0.15' },
        'DALL-E': { score: 8.7, time: '12s', cost: '$0.04' }
      }
    }
  ]);

  // Live Monitoring State
  const [monitoringData, setMonitoringData] = useState({
    totalTools: 1247,
    activeUsers: 23847,
    testsRunning: 156,
    uptime: 99.7,
    avgResponseTime: 1.2,
    alerts: [
      { id: 1, type: 'warning', message: 'High API usage detected for GPT-4', time: '2 min ago' },
      { id: 2, type: 'info', message: 'New tool added: Claude 3.5', time: '15 min ago' },
      { id: 3, type: 'error', message: 'Midjourney API experiencing delays', time: '1 hour ago' }
    ]
  });

  // Smart Stacking State
  const [toolStacks, setToolStacks] = useState([
    {
      id: 1,
      name: 'Content Creation Pipeline',
      tools: ['ChatGPT', 'Grammarly', 'Canva', 'Hootsuite'],
      automations: 3,
      saves: '15 hours/week',
      active: true
    },
    {
      id: 2,
      name: 'Data Analysis Workflow',
      tools: ['Claude', 'Tableau', 'Python', 'Excel'],
      automations: 5,
      saves: '8 hours/week',
      active: false
    }
  ]);

  // Community Intel State
  const [communityData, setCommunityData] = useState({
    totalUsers: 45392,
    activeDiscussions: 234,
    reviews: 12847,
    recommendations: [
      { tool: 'Claude 3.5', score: 9.4, trend: 'up', reviews: 1247 },
      { tool: 'ChatGPT-4', score: 9.2, trend: 'stable', reviews: 3892 },
      { tool: 'Midjourney v6', score: 9.6, trend: 'up', reviews: 2156 }
    ]
  });

  // Enterprise Suite State
  const [enterpriseData, setEnterpriseData] = useState({
    companies: 127,
    seats: 15847,
    usage: {
      totalRequests: 2847392,
      costSavings: '$247,000',
      productivity: '+34%'
    }
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMonitoringData(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10 - 5),
        testsRunning: prev.testsRunning + Math.floor(Math.random() * 6 - 3),
        avgResponseTime: +(prev.avgResponseTime + (Math.random() * 0.2 - 0.1)).toFixed(1)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const startNewTest = () => {
    const newTest = {
      id: Date.now(),
      name: 'New Comparison Test',
      tools: ['Tool A', 'Tool B'],
      status: 'running',
      progress: 0,
      prompt: 'Enter your test prompt...',
      results: {}
    };
    setSandboxTests([newTest, ...sandboxTests]);
  };

  const toggleStack = (stackId) => {
    setToolStacks(stacks => 
      stacks.map(stack => 
        stack.id === stackId ? { ...stack, active: !stack.active } : stack
      )
    );
  };

  const createNewStack = () => {
    const newStack = {
      id: Date.now(),
      name: 'New Tool Stack',
      tools: [],
      automations: 0,
      saves: '0 hours/week',
      active: false
    };
    setToolStacks([newStack, ...toolStacks]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a href="/" className="text-xl font-bold text-gray-900">AI Hub Pro</a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Pro Features</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Feature Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          {[
            { id: 'testing', name: 'Testing Sandbox', icon: TestTube, color: 'purple' },
            { id: 'monitoring', name: 'Live Monitoring', icon: Activity, color: 'blue' },
            { id: 'stacking', name: 'Smart Stacking', icon: Target, color: 'red' },
            { id: 'community', name: 'Community Intel', icon: Users, color: 'green' },
            { id: 'enterprise', name: 'Enterprise Suite', icon: Building2, color: 'indigo' }
          ].map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-4 rounded-lg border text-center transition-colors ${
                activeFeature === feature.id
                  ? `bg-${feature.color}-50 border-${feature.color}-300 text-${feature.color}-700`
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <feature.icon className={`w-8 h-8 mx-auto mb-2 ${
                activeFeature === feature.id ? `text-${feature.color}-600` : 'text-gray-500'
              }`} />
              <div className="font-medium text-sm">{feature.name}</div>
            </button>
          ))}
        </div>

        {/* Testing Sandbox */}
        {activeFeature === 'testing' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">AI Tool Testing Sandbox</h2>
              <button 
                onClick={startNewTest}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>New Test</span>
              </button>
            </div>

            <div className="grid gap-4">
              {sandboxTests.map(test => (
                <div key={test.id} className="bg-white rounded-lg border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{test.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        test.status === 'running' ? 'bg-yellow-100 text-yellow-800' :
                        test.status === 'completed' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {test.status}
                      </span>
                      {test.status === 'running' && (
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Pause className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{test.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${test.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Prompt:</p>
                    <p className="text-sm bg-gray-50 p-2 rounded">{test.prompt}</p>
                  </div>

                  {test.status === 'completed' && (
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(test.results).map(([tool, result]) => (
                        <div key={tool} className="bg-gray-50 p-3 rounded">
                          <h4 className="font-medium mb-2">{tool}</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>Score:</span>
                              <span className="font-medium">{result.score}/10</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Time:</span>
                              <span>{result.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Cost:</span>
                              <span>{result.cost}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live Monitoring */}
        {activeFeature === 'monitoring' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Live Monitoring Dashboard</h2>
            
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Tools</p>
                    <p className="text-2xl font-bold text-blue-600">{monitoringData.totalTools}</p>
                  </div>
                  <BarChart className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold text-green-600">{monitoringData.activeUsers.toLocaleString()}</p>
                  </div>
                  <Users className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Tests Running</p>
                    <p className="text-2xl font-bold text-yellow-600">{monitoringData.testsRunning}</p>
                  </div>
                  <Activity className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Uptime</p>
                    <p className="text-2xl font-bold text-purple-600">{monitoringData.uptime}%</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Alerts</h3>
              <div className="space-y-3">
                {monitoringData.alerts.map(alert => (
                  <div key={alert.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    {alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                    {alert.type === 'error' && <XCircle className="w-5 h-5 text-red-500" />}
                    {alert.type === 'info' && <CheckCircle className="w-5 h-5 text-blue-500" />}
                    <div className="flex-1">
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Smart Stacking */}
        {activeFeature === 'stacking' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Smart Tool Stacking</h2>
              <button 
                onClick={createNewStack}
                className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create Stack</span>
              </button>
            </div>

            <div className="grid gap-4">
              {toolStacks.map(stack => (
                <div key={stack.id} className="bg-white rounded-lg border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{stack.name}</h3>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleStack(stack.id)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          stack.active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {stack.active ? 'Active' : 'Inactive'}
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stack.tools.map(tool => (
                      <span key={tool} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Automations</p>
                      <p className="font-medium">{stack.automations}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Time Saved</p>
                      <p className="font-medium text-green-600">{stack.saves}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Tools</p>
                      <p className="font-medium">{stack.tools.length}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Community Intel */}
        {activeFeature === 'community' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Community Intelligence</h2>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600">{communityData.totalUsers.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Users</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">{communityData.activeDiscussions}</p>
                <p className="text-sm text-gray-600">Active Discussions</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600">{communityData.reviews.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Reviews</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-4">Top Recommendations</h3>
              <div className="space-y-3">
                {communityData.recommendations.map(rec => (
                  <div key={rec.tool} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="font-medium">{rec.tool}</div>
                      <div className="flex items-center space-x-1">
                        <div className="text-yellow-500">★</div>
                        <span className="font-medium">{rec.score}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className={`w-4 h-4 ${rec.trend === 'up' ? 'text-green-500' : 'text-gray-500'}`} />
                      <span className="text-sm text-gray-600">{rec.reviews} reviews</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enterprise Suite */}
        {activeFeature === 'enterprise' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Enterprise Suite</h2>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-indigo-600">{enterpriseData.companies}</p>
                <p className="text-sm text-gray-600">Companies</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">{enterpriseData.seats.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Seats</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600">{enterpriseData.usage.costSavings}</p>
                <p className="text-sm text-gray-600">Cost Savings</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-semibold mb-4">Usage Analytics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Total Requests:</span>
                    <span className="font-medium">{enterpriseData.usage.totalRequests.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Productivity Increase:</span>
                    <span className="font-medium text-green-600">{enterpriseData.usage.productivity}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full bg-indigo-600 text-white py-2 rounded">
                    Generate Report
                  </button>
                  <button className="w-full border border-gray-300 py-2 rounded">
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
