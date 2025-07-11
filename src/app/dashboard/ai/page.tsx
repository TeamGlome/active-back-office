'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Bot,
  Brain,
  MessageSquare,
  Send,
  Lightbulb,
  TrendingUp,
  Search,
  Zap,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  DollarSign,
  Building,
  Shield
} from 'lucide-react';

export default function AIDashboard() {
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai',
      message: "Hello! I'm your Active Back Office AI Assistant. I can help you with financial analysis, tenant management, security monitoring, and property insights. What would you like to know?",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const quickQueries = [
    "Show me revenue trends for the past 6 months",
    "What's the current occupancy rate across all properties?",
    "List all pending maintenance requests",
    "Which tenants have late payments?",
    "Generate security report for Building 7",
    "Forecast next quarter's revenue"
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    // Add user message
    const userMessage = {
      type: 'user',
      message: chatInput,
      timestamp: new Date().toLocaleTimeString()
    };

    // Simulate AI response
    const aiResponse = {
      type: 'ai',
      message: generateAIResponse(chatInput),
      timestamp: new Date().toLocaleTimeString()
    };

    setChatMessages(prev => [...prev, userMessage, aiResponse]);
    setChatInput('');
  };

  const generateAIResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('revenue') || lowerQuery.includes('income')) {
      return "Based on current data, your total revenue is $847,320 this month, which is 12.5% higher than last month. The top performing property is Building 1 with $3.2M annual revenue. Would you like me to break this down by property or time period?";
    }

    if (lowerQuery.includes('occupancy')) {
      return "Current portfolio occupancy rate is 98.5% across 52 properties with 1,247 active tenants. This is above your target of 95%. Building 1 has the highest occupancy at 99.2%, while Building 7 is at 97.5%. Would you like details on specific properties?";
    }

    if (lowerQuery.includes('maintenance')) {
      return "You have 23 open maintenance requests. 3 are marked as urgent, including a water leak in Unit 3C and HVAC issues in Building 7. Average response time is 2.3 hours, which is better than your 4-hour target. Would you like me to prioritize these by urgency?";
    }

    if (lowerQuery.includes('payment') || lowerQuery.includes('rent')) {
      return "Current rent collection rate is 94.2% with $23,480 in outstanding balances. 3 tenants have failed payments this month. Jennifer Lopez in Unit 3F has the highest outstanding balance at $2,750. Auto-retry is scheduled. Would you like me to generate collection notices?";
    }

    if (lowerQuery.includes('security')) {
      return "Security systems are 99.8% operational. 3 active threats detected: DDoS attack on Building 7, suspicious login activity on Building 3, and malware alert on Building 12. 247 intrusion attempts blocked in the last 24 hours. Would you like detailed security recommendations?";
    }

    return "I understand you're asking about " + query + ". Let me analyze the data... Based on current trends and AI predictions, I recommend checking your dashboard for real-time insights. Would you like me to generate a specific report or provide more detailed analysis?";
  };

  const handleQuickQuery = (query: string) => {
    setChatInput(query);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Assistant</h1>
          <p className="text-muted-foreground">
            Natural language queries and intelligent business insights
          </p>
        </div>
        <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
          <Bot className="w-4 h-4 mr-2" />
          AI Online
        </Badge>
      </div>

      {/* AI Capabilities Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Natural Language Queries</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">∞</div>
            <p className="text-xs text-muted-foreground">
              Ask anything about your data
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Predictive Analytics</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              Prediction accuracy
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Smart Insights</CardTitle>
            <Lightbulb className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              Actionable insights today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Automated Reports</CardTitle>
            <BarChart3 className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Reports generated today
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Chat Interface */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                AI Assistant Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="space-y-4 mb-4 h-96 overflow-y-auto border border-border rounded-lg p-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg p-3 ${
                      msg.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about your properties, finances, or operations..."
                  className="flex-1 px-3 py-2 border border-border rounded-lg bg-background"
                />
                <Button onClick={handleSendMessage}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Quick Query Buttons */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold mb-2">Quick Queries:</h4>
                <div className="flex flex-wrap gap-2">
                  {quickQueries.map((query, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuery(query)}
                      className="text-xs"
                    >
                      {query}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights Panel */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Real-Time AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-green-500">Rent Optimization</h5>
                    <p className="text-xs text-muted-foreground">
                      Units 4B-7B can support 3% rent increase based on market analysis
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-yellow-500">Maintenance Alert</h5>
                    <p className="text-xs text-muted-foreground">
                      HVAC failure predicted in Building 7 within 72 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-blue-500">Market Trend</h5>
                    <p className="text-xs text-muted-foreground">
                      Downtown rental market showing 5% growth trajectory
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Users className="w-4 h-4 text-purple-500 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-purple-500">Tenant Insight</h5>
                    <p className="text-xs text-muted-foreground">
                      Sarah Johnson (Unit 4B) likely to renew lease based on payment patterns
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI-Generated Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BarChart3 className="w-5 h-5 mr-2" />
            AI-Generated Reports & Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial Forecast
                </h4>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                  Ready
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Q1 2025 revenue projection based on current trends and seasonal patterns
              </p>
              <Button size="sm" variant="outline" className="w-full">
                View Report
              </Button>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Maintenance Optimization
                </h4>
                <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                  Generated
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Predictive maintenance schedule to reduce costs by 15%
              </p>
              <Button size="sm" variant="outline" className="w-full">
                View Report
              </Button>
            </div>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Analysis
                </h4>
                <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                  Processing
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Monthly security threat assessment and recommendations
              </p>
              <Button size="sm" variant="outline" className="w-full" disabled>
                Processing...
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="w-5 h-5 mr-2" />
            AI Performance & Learning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500">1,247</div>
              <div className="text-sm text-muted-foreground">Queries Processed</div>
              <div className="text-xs text-green-500">Today</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-500">94.8%</div>
              <div className="text-sm text-muted-foreground">Response Accuracy</div>
              <div className="text-xs text-green-500">+2.1% this week</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">847ms</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
              <div className="text-xs text-green-500">-15% faster</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">156</div>
              <div className="text-sm text-muted-foreground">Insights Generated</div>
              <div className="text-xs text-muted-foreground">This week</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Button variant="outline" className="h-16 flex-col">
          <Search className="w-5 h-5 mb-2" />
          Advanced Search
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <BarChart3 className="w-5 h-5 mb-2" />
          Generate Report
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Brain className="w-5 h-5 mb-2" />
          Train AI Model
        </Button>

        <Button variant="outline" className="h-16 flex-col">
          <Lightbulb className="w-5 h-5 mb-2" />
          Smart Insights
        </Button>
      </div>
    </div>
  );
}
